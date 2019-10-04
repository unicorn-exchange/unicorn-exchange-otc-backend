import * as yup from "yup";

export function validateObject(data: object, schema: yup.ObjectSchemaDefinition<object>): Promise<void> {
  return yup
    .object()
    .shape(schema)
    .isValid(data)
    .then(valid => {
      if (!valid) {
        throw new Error("Invalid params"); // TODO: Redo and add key-value errors
      }
    });
}
