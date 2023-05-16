import {
  useEffect,
  useState,
  useCallback,
  Fragment,
  useRef,
  useMemo,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Heading,
  LoadingSpinner,
  Button,
  EmptyState,
  Icon,
} from "@/components/atoms";
import {
  ModalDialog,
  ModalForm,
  CardTodolist,
  DropdownSort,
} from "@/components/molecules";
import {
  ApiGetActivityGroupById,
  ApiUpdateTodo,
  ApiCreateNewTodo,
  ApiDeleteTodo,
  ApiUpdateTitleActivityGroupById,
  ApiCheckListTodo,
} from "@/api";
import {
  sortAscendingByTitle,
  sortDescendingByTitle,
  sortByUnfinished,
  sortByOldest,
  sortByLatest,
} from "@/utils/sort";
import DataPriority from "@/data/priority";

const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [detailActivity, setDetailActivity] = useState({});
  const [todosId, setTodosId] = useState("");
  const [todosActive, setTodosActive] = useState("");
  const [modalForm, setModalForm] = useState({
    open: "",
    disabledButton: true,
    itemName: {
      value: "",
    },
    priority: {
      value: "very-high",
    },
  });
  const [valueSort, setValueSort] = useState("latest");
  const [modalDialog, setModalDialog] = useState({
    isOpen: false,
    title: "",
    desc: "",
    disabledButton: false,
  });
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => {
    if (isLoading) {
      ApiGetActivityGroupById(params.id).then((response) => {
        if (!response.response?.status) {
          setDetailActivity(response);
          setIsLoading(false);
        }
      });
    }
  }, [params.id, isLoading]);

  useEffect(() => {
    if (modalForm.itemName.value !== "" && modalForm.priority.value !== "") {
      setModalForm((oldState) => ({
        ...oldState,
        disabledButton: false,
      }));
    } else {
      setModalForm((oldState) => ({
        ...oldState,
        disabledButton: true,
      }));
    }
  }, [modalForm.itemName.value, modalForm.priority.value]);

  const handleBackBtn = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  const handleCloseModalDialog = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: false,
      title: "",
      desc: "",
      disabledButton: false,
    }));
    setTodosId("");
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalForm((oldState) => ({
      ...oldState,
      open: false,
      disabledButton: true,
      itemName: {
        ...oldState.itemName,
        value: "",
      },
      priority: {
        ...oldState.priority,
        value: "very-high",
      },
    }));
    setTodosId("");
    setTodosActive("");
  }, []);

  const handleAddTodoList = useCallback(() => {
    setModalForm((oldState) => ({
      ...oldState,
      open: true,
    }));
  }, []);

  const handleChangeItemName = useCallback((e) => {
    const { value } = e.target;
    setModalForm((oldState) => ({
      ...oldState,
      itemName: {
        ...oldState.itemName,
        value: value,
      },
    }));
  }, []);

  const handleChangePriority = useCallback((value) => {
    setModalForm((oldState) => ({
      ...oldState,
      priority: {
        ...oldState.priority,
        value: value,
      },
    }));
  }, []);

  const handleSubmitActivity = useCallback(() => {
    const { itemName, priority } = modalForm;
    setModalForm((oldState) => ({
      ...oldState,
      disabledButton: true,
    }));

    if (todosId !== "") {
      ApiUpdateTodo(todosId, todosActive, itemName.value, priority.value).then(
        (response) => {
          const stateTodo = [...detailActivity.todo_items];
          const index = stateTodo.map((d) => d.id).indexOf(todosId);
          stateTodo[index] = {
            activity_group_id: response.activity_group_id,
            id: response.id,
            is_active: response.is_active,
            priority: response.priority,
            title: response.title,
          };
          setDetailActivity((oldState) => ({
            ...oldState,
            todo_items: stateTodo,
          }));
          handleCloseModal();
        }
      );
    } else {
      ApiCreateNewTodo(params.id, itemName.value, priority.value).then(
        (response) => {
          setIsLoading(true);
          handleCloseModal();
        }
      );
    }
  }, [
    todosId,
    todosActive,
    modalForm,
    params.id,
    handleCloseModal,
    detailActivity.todo_items,
  ]);

  const handleEditTodo = useCallback((data) => {
    setModalForm((oldState) => ({
      ...oldState,
      open: true,
      itemName: {
        ...oldState.itemName,
        value: data.title,
      },
      priority: {
        ...oldState.priority,
        value: data.priority,
      },
    }));
    setTodosId(data.id);
    setTodosActive(data.is_active);
  }, []);

  const handleDeleteTodo = useCallback((data) => {
    setTodosId(data.id);
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: true,
      title: data.title,
      desc: "Apakah anda yakin menghapus List Item",
    }));
  }, []);

  const handleSubmitDeleteTodo = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      disabledButton: true,
    }));
    ApiDeleteTodo(todosId).then((response) => {
      const stateTodo = [...detailActivity.todo_items];
      const index = stateTodo.map((d) => d.id).indexOf(todosId);
      stateTodo.splice(index, 1);
      setDetailActivity((oldState) => ({
        ...oldState,
        todo_items: stateTodo,
      }));
      handleCloseModalDialog();
    });
  }, [todosId, handleCloseModalDialog, detailActivity.todo_items]);

  const handleCheklistTodo = useCallback(
    async (data) => {
      const isActive = data.is_active === 1 ? 0 : 1;
      const state = [...detailActivity.todo_items];
      const index = state.map((d) => d.id).indexOf(data.id);
      state[index].is_active = isActive;
      setDetailActivity((oldState) => ({
        ...oldState,
        todo_items: state,
      }));
      await ApiCheckListTodo(data.id, isActive, data.priority);
    },
    [detailActivity.todo_items]
  );

  const handleChangeEditTitle = useCallback((e) => {
    const { value } = e.target;
    setDetailActivity((oldState) => ({
      ...oldState,
      title: value,
    }));
  }, []);

  const handleEditTitle = useCallback(() => {
    if (isEdit) {
      ApiUpdateTitleActivityGroupById(params.id, detailActivity.title).then(
        (response) => {
          setDetailActivity((oldState) => ({
            ...oldState,
            title: response.title,
          }));
        }
      );
    }
    setIsEdit(!isEdit);
  }, [isEdit, params.id, detailActivity.title]);

  const onBlur = useCallback(() => {
    inputRef.current.blur();
    handleEditTitle();
  }, [handleEditTitle]);

  const handleSortData = useCallback((value) => {
    setValueSort(value);
  }, []);

  const listDataTodo = useMemo(() => {
    const newObj = {
      latest: (data) => {
        return sortByLatest(data);
      },
      oldest: (data) => {
        return sortByOldest(data);
      },
      az: (data) => {
        return sortAscendingByTitle(data);
      },
      za: (data) => {
        return sortDescendingByTitle(data);
      },
      unfinished: (data) => {
        return sortByUnfinished(data);
      },
    };
    const data = newObj[valueSort](detailActivity?.todo_items || []);
    return data.map((d, i) => {
      const dataPriority = DataPriority.find((f) => f.value === d.priority);
      return (
        <CardTodolist
          key={i}
          isActive={d.is_active}
          title={d.title}
          color={dataPriority.color}
          lastIndex={data.length - 1 === i}
          onClickEdit={() => handleEditTodo(d)}
          onClickDelete={() => handleDeleteTodo(d)}
          onClickCheckList={() => handleCheklistTodo(d)}
        />
      );
    });
  }, [valueSort, detailActivity.todo_items]);

  return (
    <Fragment>
      <div className="mb-[37px] lg:mb-[55px] flex justify-between">
        {!isLoading ? (
          <div className="flex items-center">
            <button
              data-cy="todo-back-button"
              className="hidden lg:block mr-[30px]"
              onClick={handleBackBtn}
            >
              <Icon name="chevron-left-black" />
            </button>

            <div className="flex justify-between items-center w-full">
              {isEdit ? (
                <input
                  ref={inputRef}
                  className="w-full h-full border-b border-[#111] text-[#111] font-bold text-[16px] lg:text-[36px] outline-none"
                  value={detailActivity.title}
                  onChange={handleChangeEditTitle}
                  onBlur={onBlur}
                />
              ) : (
                <Heading type="2" dataCy="todo-title" onClick={handleEditTitle}>
                  {detailActivity.title}
                </Heading>
              )}

              <button
                data-cy="todo-title-edit-button"
                className="ml-[30px]"
                onClick={() => {
                  if (inputRef.current === null) {
                    handleEditTitle();
                  }
                }}
              >
                <Icon name="pencil-grey" />
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex items-center justify-end">
          <DropdownSort
            dataCyButton="todo-sort-button"
            value={valueSort}
            onSelect={(value) => handleSortData(value)}
          />

          <Button
            dataCy="todo-add-button"
            iconName={"plus-white"}
            onClick={handleAddTodoList}
          >
            Tambah
          </Button>
        </div>
      </div>

      {isLoading ? <LoadingSpinner /> : null}

      {!isLoading && !detailActivity.todo_items.length > 0 ? (
        <EmptyState
          type={2}
          dataCy="todo-empty-state"
          onClick={handleAddTodoList}
        />
      ) : null}

      {!isLoading && detailActivity?.todo_items.length > 0 ? (
        <ul>{listDataTodo}</ul>
      ) : null}

      <ModalForm
        open={modalForm.open}
        valueItemName={modalForm.itemName.value}
        disabledButton={modalForm.disabledButton}
        valuePriority={modalForm.priority.value}
        onClose={handleCloseModal}
        onChangeItemName={handleChangeItemName}
        onClickPriority={(value) => handleChangePriority(value)}
        onSubmit={handleSubmitActivity}
      />

      <ModalDialog
        open={modalDialog.isOpen}
        desc={modalDialog.desc}
        title={modalDialog.title}
        onSubmitCancel={handleCloseModalDialog}
        onSubmitDelete={handleSubmitDeleteTodo}
        disabledButton={modalDialog.disabledButton}
      />

      <div data-cy="modal-add"></div>
      <div data-cy="modal-information"></div>
      <div data-cy="modal-delete"></div>
    </Fragment>
  );
};

export default Home;
