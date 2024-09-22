
export * from "@/core/serialize";
import {
    serializeFormData,
    serializeUrlEncoded,
    deserializeFormData,
    deserializeUrlEncoded
} from "@/core/serialize";

const Serialize = {
    serializeFormData,
    serializeUrlEncoded,
    deserializeFormData,
    deserializeUrlEncoded
};

export default Serialize;