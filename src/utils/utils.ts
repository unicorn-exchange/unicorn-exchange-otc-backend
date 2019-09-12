import * as yup from "yup";

export function validateObject(data: object, schema: yup.ObjectSchemaDefinition<object>): Promise<boolean> {
  return yup
    .object()
    .shape(schema)
    .isValid(data);
}
