import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { notification } from "antd";
import { clearError } from "../../app/store/errorSlice";

function ErrorDisplay(): JSX.Element {
  const errors = useAppSelector((state) => state.errors.errors);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // Loop through errors and show notifications for each
    Object.entries(errors).forEach(([source, message]) => {
      notification.error({
        message: `Error in ${source}`,
        description: message,
        placement: "topRight",
        duration: 5, // seconds
      });
      dispatch(clearError(source));
    });
  }, [dispatch, errors]);

  return <></>; // This component doesn't render anything visually
}

export default ErrorDisplay;
