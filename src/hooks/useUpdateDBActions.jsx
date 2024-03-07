import axios from 'axios'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { GetTODOList } from '../selectors'

export const useUpdateDBActions = () => {
  const TODOList = useSelector(GetTODOList)

  const postTODO = useCallback(async TODO => {
    try {
      const response = await axios.post('http://localhost:3000/postTODO',
        TODO,
        {
          headers: {}
        }
      )

      if (response) {
        return response.data
      }
    } catch (error) {
      alert(`avi's server had a problam with error message of : ${error.message}`)
    }
  }, [])

  const patchFieldWantedTODO = useCallback(async (wantedTODOID, field, fieldUpdateVal) => {
    try {
      const response = await axios.patch(
        'http://localhost:3000/patchFieldWantedTODO'
        ,
        {
          _id: wantedTODOID,
          wantedField: field,
          wantedFieldUpdateVal: fieldUpdateVal
        }
      )
      if (response) {
        return response.data
      }
    } catch (error) {
      console.error(`Error fetching TODOs: ${error.message}`)
      throw error
    }
  }, [])

  const patchFieldAllTODOS = useCallback(async (field, fieldUpdateVal) => {
    try {
      const response = await axios.patch(
        'http://localhost:3000/patchFieldAllTODOS'
        ,
        {
          wantedField: field,
          wantedFieldUpdateVal: fieldUpdateVal
        }
      )

      if (response) {
        return response.data
      }
    } catch (error) {
      console.error(`Error fetching TODOs: ${error.message}`)
      throw error
    }
  }, [])

  const putWantedTODO = useCallback(async wantedTODOID => {
    try {
      const response = await axios.put(
        'http://localhost:3000/putWantedTODO'
        , TODOList[wantedTODOID]
      )

      if (response) {
        return response.data
      }
    } catch (error) {
      console.error(`Error fetching TODOs: ${error.message}`)
      throw error
    }
  }, [TODOList])

  const deleteAllWantedDocuments = useCallback(async wantedCollection => {
    try {
      const response = await axios.delete(
        'http://localhost:3000/deleteAllDocuWantedCollection/' + wantedCollection
      )

      if (response) {
        return response.data
      }
    } catch (error) {
      console.error(`Error fetching TODOs: ${error.message}`)
      throw error
    }
  }, [])

  return {
    postTODO,
    patchFieldWantedTODO,
    patchFieldAllTODOS,
    putWantedTODO,

    deleteAllWantedDocuments
    // just so i could delete TODOS data through my work

  }
}
