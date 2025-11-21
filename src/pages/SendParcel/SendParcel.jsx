import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = watch("senderRegion");

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <div className="card-body p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Send A Parcel</h2>
        <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-6">
          {/* Parcel Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Parcel Type</span>
            </label>
            <div className="flex gap-6">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  {...register("parcelType", { required: true })}
                  value="document"
                  className="radio radio-primary mr-2"
                />
                <span className="label-text">Document</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  {...register("parcelType", { required: true })}
                  value="non-document"
                  className="radio radio-primary mr-2"
                />
                <span className="label-text">Non Document</span>
              </label>
            </div>
            {errors.parcelType?.type === "required" && (
              <label className="label">
                <span className="label-text-alt text-error">
                  Please select a parcel type
                </span>
              </label>
            )}
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Parcel Name</span>
              </label>
              <input
                type="text"
                {...register("parcelName", { required: true })}
                className="input input-bordered w-full"
                placeholder="Enter parcel name"
              />
              {errors.parcelName?.type === "required" && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    Parcel name is required
                  </span>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Parcel Weight (kg)
                </span>
              </label>
              <input
                type="number"
                {...register("parcelWeight", { required: true, min: 0.1 })}
                className="input input-bordered w-full"
                placeholder="Enter parcel weight"
                step="0.1"
              />
              {errors.parcelWeight?.type === "required" && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    Parcel weight is required
                  </span>
                </label>
              )}
            </div>
          </div>

          {/* Sender and Receiver Details - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Sender Details Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Sender Details</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Sender Name</span>
                </label>
                <input
                  type="text"
                  {...register("senderName", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Enter sender name"
                />
                {errors.senderName?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Sender name is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Sender Address</span>
                </label>
                <textarea
                  {...register("senderAddress", { required: true })}
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter sender address"
                  rows="3"
                />
                {errors.senderAddress?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Sender address is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Sender Email Address
                  </span>
                </label>
                <input
                  type="email"
                  {...register("senderEmailAddress", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Enter sender email address"
                />
                {errors.senderEmailAddress?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Sender email address is required
                    </span>
                  </label>
                )}
              </div>

              {/* sender region */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Sender Region</span>
                </label>
                <select
                  {...register("senderRegion", { required: true })}
                  defaultValue=""
                  className="select select-bordered w-full"
                >
                  <option value="" disabled>
                    Pick a region
                  </option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.senderRegion?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Sender region is required
                    </span>
                  </label>
                )}
              </div>

              {/* sender district */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Sender District
                  </span>
                </label>
                <select
                  {...register("senderDistrict", { required: true })}
                  defaultValue=""
                  className="select select-bordered w-full"
                  disabled={!senderRegion}
                >
                  <option value="" disabled>
                    Pick a district
                  </option>
                  {senderRegion &&
                    districtByRegion(senderRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                </select>
                {errors.senderDistrict?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Sender district is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Sender Phone No
                  </span>
                </label>
                <input
                  type="tel"
                  {...register("senderPhone", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Enter sender phone number"
                />
                {errors.senderPhone?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Sender phone number is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Pickup Instruction
                  </span>
                </label>
                <textarea
                  {...register("senderPickupInstruction")}
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter pickup instructions (optional)"
                  rows="3"
                />
              </div>
            </div>

            {/* Receiver Details Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Receiver Details</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Receiver Name</span>
                </label>
                <input
                  type="text"
                  {...register("receiverName", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Enter receiver name"
                />
                {errors.receiverName?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Receiver name is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Receiver Address
                  </span>
                </label>
                <textarea
                  {...register("receiverAddress", { required: true })}
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter receiver address"
                  rows="3"
                />
                {errors.receiverAddress?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Receiver address is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Receiver Phone No
                  </span>
                </label>
                <input
                  type="tel"
                  {...register("receiverPhone", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Enter receiver phone number"
                />
                {errors.receiverPhone?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Receiver phone number is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Receiver District
                  </span>
                </label>
                <input
                  type="text"
                  {...register("receiverDistrict", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Enter receiver district"
                />
                {errors.receiverDistrict?.type === "required" && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      Receiver district is required
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Pickup Instruction
                  </span>
                </label>
                <textarea
                  {...register("receiverPickupInstruction")}
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter pickup instructions (optional)"
                  rows="3"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-8">
            <button type="submit" className="btn btn-primary w-full text-black">
              Send Parcel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
