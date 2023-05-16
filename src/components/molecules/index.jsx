import { lazy } from "react";

const ListActivity = lazy(() => import("./ListActivity"));
const ModalDialog = lazy(() => import("./ModalDialog"));
const ModalAlert = lazy(() => import("./ModalAlert"));
const ModalForm = lazy(() => import("./ModalForm"));
const DropdownPriority = lazy(() => import("./DropdownPriority"));
const CardTodolist = lazy(() => import("./CardTodolist"));
const DropdownSort = lazy(() => import("./DropdownSort"));

export {
  ListActivity,
  ModalDialog,
  ModalAlert,
  ModalForm,
  DropdownPriority,
  CardTodolist,
  DropdownSort,
};
