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
        columns: ["Name", "Age"],
        rows: [
          ["Alice", "30"],
          ["Bob", "40"],
        ],
        striped: true,
        bordered: true,
      },
    },
    "31c55639-8cdb-45e2-9b5f-772a1f441bfe": {
      type: "dataView",
      attributes: {
        label: "Summary",
        data: [
          { key: "First", value: "Alice" },
          { key: "Last", value: "Smith" },
        ],
      },
    },
  },
  root: [
    "a68836dc-1478-435f-bdee-ca7aff098993",
    "18950fc8-81f6-4927-91c0-880c36a56deb",
    "39ea99a0-9f37-4446-9376-d93d6d7c35c5",
    "5b6fb8d2-1f50-4a55-bb3d-d49f6f0b567a",
    "31c55639-8cdb-45e2-9b5f-772a1f441bfe",
  ],
} as const;
