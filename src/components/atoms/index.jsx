import { lazy } from "react";

const Heading = lazy(() => import("./Heading"));
const Icon = lazy(() => import("./Icon"));
const LoadingSpinner = lazy(() => import("./LoadingSpinner"));
const Button = lazy(() => import("./Button"));
const EmptyState = lazy(() => import("./EmptyState"));
const Label = lazy(() => import("./Label"));
const Checkbox = lazy(() => import("./Checkbox"));

export { Heading, Icon, LoadingSpinner, Button, EmptyState, Label, Checkbox };
