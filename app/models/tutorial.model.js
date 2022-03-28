module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      login: String,
      password: String,
      logoCar: String,
      startMileage: Number,
      curentWithout: Number,
      middleMileage: Number,
      fuelType: String,
      fuelMiddle: Number,
      priceAuto: Number,
      changeOil: Array,
      mileageHistory: Array,
      event: Array,
      date: String,
      mileage: Number,
      nameEvent: String,
      price: Number,
      typeEvent: String,
      whoSpent: String,
      installedParts: Array,
      brandDetails: String,
      detailNumber: String,
      nameDetail: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
