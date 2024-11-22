import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import ApiFeatures from "../utils/apiFeatures.js";

const deleteOneDoc = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id, {
      lean: true,
    });

    if (!doc)
      return next(new AppError("Can not find a document with that id", 404));

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
};

const updateOneDoc = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc)
      return next(new AppError("Can not find a document with that id", 404));

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
};

const createOneDoc = (Model) => {
  return catchAsync(async (req, res, next) => {
    console.log(req.body);
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      data: {
        status: "success",
        data: newDoc,
      },
    });
  });
};

const getOneDoc = (Model, populateOptions) => {
  return catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOptions) query = query.populate(populateOptions);
    const doc = await query;

    if (!doc)
      return next(new AppError("Can not find a document with that id", 404));

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
};

const getAllDoc = (Model) => {
  return catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    const feauture = new ApiFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .fieldsLimit()
      .paginate();
    const docs = await feauture.query;

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      result: docs.length,
      data: {
        data: docs,
      },
    });
  });
};

export default {
  deleteOneDoc,
  updateOneDoc,
  createOneDoc,
  getOneDoc,
  getAllDoc,
};
