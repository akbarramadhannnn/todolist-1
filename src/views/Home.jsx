import { useEffect, useState, useCallback, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Heading, Button, EmptyState } from "@/components/atoms";
import { ListActivity, ModalDialog, ModalAlert } from "@/components/molecules";
import {
  ApiGetActivityGroup,
  ApiCreateActivityGroup,
  ApiDeleteActivityGroupById,
} from "@/api";
import moment from "@/lib/moment";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listActivity, setListActivity] = useState({});
  const [modalDialog, setModalDialog] = useState({
    isOpen: false,
    title: "",
    desc: "",
    disabledButton: false,
  });
  const [activityId, setActivityId] = useState("");
  const [modalAlert, setModalAlert] = useState({
    isOpen: false,
    desc: "",
  });

  useEffect(() => {
    if (isLoading) {
      ApiGetActivityGroup().then((response) => {
        setListActivity(response);
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  const handleAddActivity = useCallback(() => {
    ApiCreateActivityGroup().then((response) => {
      setIsLoading(true);
    });
  }, []);

  const handleDeleteCard = useCallback((data) => {
    setActivityId(data.id);
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: true,
      title: data.title,
      desc: "Apakah anda yakin menghapus activity",
    }));
  }, []);

  const handleCloseModalDialog = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      isOpen: false,
      title: "",
      desc: "",
      disabledButton: false,
    }));
    setActivityId("");
  }, []);

  const handleSubmitDeleteActivity = useCallback(() => {
    setModalDialog((oldState) => ({
      ...oldState,
      disabledButton: true,
    }));
    ApiDeleteActivityGroupById(activityId).then((response) => {
      setIsLoading(true);

      handleCloseModalDialog();
      setModalAlert((oldState) => ({
        ...oldState,
        isOpen: true,
        desc: "Activity berhasil dihapus",
      }));
    });
  }, [activityId, handleCloseModalDialog]);

  const handleCloseModalAlert = useCallback(() => {
    setModalAlert((oldState) => ({
      ...oldState,
      isOpen: false,
      desc: "",
    }));
  }, []);

  const handleDetailCard = useCallback(
    (data) => {
      navigate(`/detail-activity/${data.id}`);
    },
    [navigate]
  );

  return (
    <Fragment>
      <div className="mb-[37px] lg:mb-[55px] flex justify-between">
        <Heading type="2" dataCy="activity-title">
          Activity
        </Heading>

        <Button
          dataCy={"activity-add-button"}
          iconName={"plus-white"}
          onClick={handleAddActivity}
        >
          Tambah
        </Button>
      </div>

      {!listActivity?.data?.length > 0 ? (
        <EmptyState
          type={1}
          dataCy="activity-empty-state"
          onClick={handleAddActivity}
        />
      ) : null}

      {listActivity?.data?.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {listActivity.data.map((d, i) => {
            return (
              <ListActivity
                key={i}
                title={d.title}
                date={moment(d.created_at).format("D MMMM YYYY")}
                onClickDelete={() => handleDeleteCard(d)}
                onClickCard={() => handleDetailCard(d)}
              />
            );
          })}
        </ul>
      ) : null}

      <ModalDialog
        open={modalDialog.isOpen}
        desc={modalDialog.desc}
        title={modalDialog.title}
        onSubmitCancel={handleCloseModalDialog}
        onSubmitDelete={handleSubmitDeleteActivity}
        disabledButton={modalDialog.disabledButton}
      />

      <ModalAlert
        open={modalAlert.isOpen}
        desc={modalAlert.desc}
        onClose={handleCloseModalAlert}
      />

      <div data-cy="modal-delete"></div>
      <div data-cy="modal-information"></div>
    </Fragment>
  );
};

export default Home;
