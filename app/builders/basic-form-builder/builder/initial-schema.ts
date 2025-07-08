export const initialSchema = {
  entities: {
    "a68836dc-1478-435f-bdee-ca7aff098993": {
      type: "textField",
      attributes: {
        label: "First Name",
        required: true,
      },
    },
    "18950fc8-81f6-4927-91c0-880c36a56deb": {
      type: "textField",
      attributes: {
        label: "Last Name",
        required: true,
      },
    },
    "39ea99a0-9f37-4446-9376-d93d6d7c35c5": {
      type: "textareaField",
      attributes: {
        label: "About You",
      },
    },
    "5b6fb8d2-1f50-4a55-bb3d-d49f6f0b567a": {
      type: "dataTable",
      attributes: {
        label: "Sample Table",
      },
    },
    "b9221e1e-4db1-4568-8b0d-b8761c4d5ad1": {
      type: "numberField",
      attributes: {
        label: "Age",
        min: 0,
        max: 120,
        step: 1,
      },
    },
    "6f221146-2fa5-4f2b-a504-9d8a327d9d77": {
      type: "checkboxField",
      attributes: {
        label: "Agree to Terms",
        defaultValue: false,
      },
    },
    "9c5a34b1-dc48-4cab-b0f7-367beea53010": {
      type: "sliderField",
      attributes: {
        label: "Satisfaction",
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
  root: [
    "a68836dc-1478-435f-bdee-ca7aff098993",
    "18950fc8-81f6-4927-91c0-880c36a56deb",
    "39ea99a0-9f37-4446-9376-d93d6d7c35c5",
    "5b6fb8d2-1f50-4a55-bb3d-d49f6f0b567a",
    "b9221e1e-4db1-4568-8b0d-b8761c4d5ad1",
    "6f221146-2fa5-4f2b-a504-9d8a327d9d77",
    "9c5a34b1-dc48-4cab-b0f7-367beea53010",
  ],
} as const;
