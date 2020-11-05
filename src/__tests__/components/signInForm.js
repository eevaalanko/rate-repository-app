import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import { SignInFormContainer } from "../../components/SignInForm";

describe("SignInForm", () => {
  describe("SignInFormContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(
        <SignInFormContainer
          initialValues={{ username: "", password: "" }}
          onSubmit={onSubmit}
        />
      );
      fireEvent.changeText(getByTestId("username"), "Kalle");
      fireEvent.changeText(getByTestId("password"), "password");
      fireEvent.press(getByTestId("submitButton"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "Kalle",
          password: "password",
        });
      });
    });
  });
});
