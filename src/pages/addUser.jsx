import React from 'react';

const addUser = () => {
  return (
    <div className="flex justify-center py-10 h-screen bg-[#E5E5E5]">
      <div class="relative p-4 w-full lg:max-w-[50%] h-full px-5">
        <div class="relative bg-white rounded-lg shadow overflow-y-scroll">
          <div class="py-6 px-6 lg:px-8">
            <div class="mb-4">
              <h3 class="text-xl font-medium text-gray-900">Add User</h3>
              <span class="text-xs">Personal Details</span>
            </div>

            <form class="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#051A2E] "
                >
                  Title
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Title"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#051A2E] "
                >
                  First Name
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#051A2E] "
                >
                  Last Name
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  class="block mb-2 text-sm font-medium text-[#051A2E]"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option defaultValue={''}>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#051A2E] "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="example@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addUser;
