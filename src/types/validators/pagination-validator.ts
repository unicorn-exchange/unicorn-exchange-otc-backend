import * as yup from "yup";
import {paginationFields} from "../enums/forms/pagination";

export const paginationValidationScheme = {
  [paginationFields.limit]: yup
    .number()
    .min(1)
    .max(20)
    .nullable(),
  [paginationFields.offset]: yup
    .number()
    .min(0)
    .nullable(),
};

export const defaultPagination = {
  [paginationFields.limit]: 20,
  [paginationFields.offset]: 0,
};
