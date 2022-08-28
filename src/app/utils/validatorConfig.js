export const validatorConfig = {
  name: {
    isRequired: {
      message: "Field 'Name': is required!",
    },
  },
  firstName: {
    isRequired: {
      message: "Field 'First Name': is required!",
    },
  },
  birthday: {
    isRequired: {
      message: "Field 'Your birthday': is required!",
    },
    isNumberOfDigits: {
      message: "Field 'Your birthday': incorrectly filled!",
    },
    maxYear: {
      message:
        "Field 'Your birthday': year cannot be greater than field current!",
      value: new Date().getFullYear(),
    },
  },
  portfolio: {
    isRequired: {
      message: "Field 'Portfolio': is required!",
    },
    isUrl: {
      message: "Field 'Portfolio': should be a link!",
    },
  },
};
