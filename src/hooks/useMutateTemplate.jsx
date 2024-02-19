import { useMutation } from 'react-query'

export const useMutateTemplate = (wantedFunc, onError, onSuccess) => useMutation({
    mutationFn: wantedFunc,
    onError,
    onSuccess
})
