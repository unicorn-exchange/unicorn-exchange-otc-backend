import * as yup from "yup";

export function validateObject(data: object, schema: yup.ObjectSchemaDefinition<object>): Promise<object> {
  return yup
    .object()
    .shape(schema)
    .validate(data);
}
