import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Spinner } from 'flowbite-react';

import { createUser } from '../store/users/usersSlice';

const AddUser = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'Invalid gender')
      .required('Required'),
    phone: Yup.string().required('Required'),
    dateOfBirth: Yup.string().required('Required'),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const res = await dispatch(createUser(values)).unwrap();
      console.log('res', res);
      toast.success('User created successfully');
      resetForm(initialValues);
      setLoading(false);
    } catch (error) {
      // toast.error(error.message);
      resetForm(initialValues);
      toast.error('Failed to create user');
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <div className="flex justify-center py-10 h-screen bg-[#E5E5E5]">
          <div className="relative p-4 w-full lg:max-w-[50%] h-full px-5">
            <div className="relative bg-white rounded-lg shadow overflow-y-scroll max-h-[80vh]">
              <div className="py-6 px-6 lg:px-8 w-full">
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Add User
                  </h3>
                  <span className="text-xs">Personal Details</span>
                </div>

                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-[#051A2E] "
                    >
                      Title
                    </label>
                    <Field
                      name="title"
                      placeholder="Title"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <ErrorMessage
                      component="span"
                      name="title"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-[#051A2E] "
                    >
                      First Name
                    </label>
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <ErrorMessage
                      component="span"
                      name="firstName"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-[#051A2E] "
                    >
                      Last Name
                    </label>
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <ErrorMessage
                      component="span"
                      name="lastName"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-[#051A2E]"
                    >
                      Gender
                    </label>
                    <Field
                      name="gender"
                      as="select"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>
                    <ErrorMessage
                      component="span"
                      name="gender"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-[#051A2E] "
                    >
                      Email Address
                    </label>
                    <Field
                      name="email"
                      placeholder="example@email.com"
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="date of birth"
                      className="block mb-2 text-sm font-medium text-[#051A2E] "
                    >
                      Date of Birth
                    </label>
                    <Field
                      name="dateOfBirth"
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <ErrorMessage
                      component="span"
                      name="dateOfBirth"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-[#051A2E] "
                    >
                      Phone
                    </label>
                    <Field
                      name="phone"
                      placeholder="Phone"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <ErrorMessage
                      component="span"
                      name="phone"
                      className="text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center"
                  >
                    <>
                      {loading ? (
                        <div className="mr-3">
                          <Spinner size="sm" light={true} />
                        </div>
                      ) : (
                        <span className="mt-[2px]">Add User</span>
                      )}
                    </>
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddUser;
