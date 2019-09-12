import {default as yup, ObjectSchemaDefinition} from "yup";

export function validateObject(data: object, schema: ObjectSchemaDefinition<object>): Promise<boolean> {
  return yup
    .object()
    .shape(schema)
    .isValid(data);
}
