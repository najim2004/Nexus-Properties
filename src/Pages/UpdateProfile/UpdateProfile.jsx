import { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
const UpdateProfile = () => {
  const { user, updateUserProfile, sweetAlert } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: user?.displayName,
      Photo: user?.photoURL,
    },
  });
  const handleUpdateProfile = (data) => {
    const { Photo, Name } = data;
    if (Photo !== user?.photoURL || Name !== user?.displayName) {
      updateUserProfile(Name, Photo)
        .then(() => {
          sweetAlert("Successfully Updated", "success", false, false, 2000);
        })
        .catch((errors) => {
          sweetAlert("Oops!", "warning", "Something went wrong", true, false);
          console.log(errors);
        });
    } else {
      sweetAlert("No Changes", "warning", false, true, false);
    }
  };
  return (
    <div className="bg-[white]">
      <Navbar></Navbar>
      <div className="max-w-[1300px] h-[calc(100vh-78px)] lg:h-[calc(100vh-108px)] flex items-center mx-auto">
        <div className="bg-[#1e1e1e0b] mx-2 lg:p-12 p-6 md:p-8 w-[900px] md:mx-auto Lg:mx-auto min-h-[550px] rounded-2xl">
          <div className="mb-10">
            <h3 className=" font-semibold">Update Your Profile</h3>
            <hr className="h-[1px] bg-gray-400 mt-5" />
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <img
              className="size-[150px] mx-auto md:mx-0 lg:mx-0 rounded-[50%]"
              src={user?.photoURL ? user?.photoURL : userImg}
              alt=""
            />

            <div className="w-full">
              <form
                onSubmit={handleSubmit(handleUpdateProfile)}
                className="space-y-3"
              >
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-600">
                    Your Name
                  </label>
                  <input
                    name="Name"
                    {...register("Name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 outline-none rounded-md border-gray-300 border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                  {errors?.Name?.type === "required" && (
                    <p className="text-red-500 dark:text-red-400">
                      This filed is required!
                    </p>
                  )}
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-600">
                    Your Photo Url
                  </label>
                  <input
                    name="photo"
                    {...register("Photo")}
                    type="text"
                    placeholder="Photo"
                    className="w-full px-4 py-3 rounded-md border-gray-300 outline-none border-[1px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-600">Your Email</label>
                  <input
                    name="email"
                    readOnly
                    value={user?.email}
                    type="text"
                    className="w-full px-4 py-3 rounded-md border-gray-300 outline-none border-[1px] dark:bg-gray-50 dark:text-gray-800 "
                  />
                </div>
                <input
                  type="submit"
                  value="Save"
                  className="w-full rounded-lg btn p-3 text-center dark:text-gray-50 dark:bg-violet-600"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
