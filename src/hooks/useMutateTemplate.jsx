import { useMutation } from "react-query";

export const useMutateTemplate = (wantedFunc, onError, onSuccess) => {

    return useMutation({
        mutationFn : wantedFunc,
        onError: onError,
        onSuccess: onSuccess
    })
};