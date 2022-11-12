import { useFormik } from "formik";
import {  useCallback, useMemo } from "react";
import * as Yup from "yup";
import { newUsersActions } from "../../../redux/actions";
import { useAppDispatch } from "../../../redux/store/hooks";


export const useForm = () => {
    const dispatch = useAppDispatch()

    const validationSchema = useMemo(() => Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        image: Yup.string().required('Image is required'),
    }), []);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        image: '',
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values: any) => {
            dispatch(newUsersActions(values))
        }
    });


    const handleReset = useCallback(() => {
        formik.resetForm();
    }, [formik]);

    return { formik, handleReset };
}
