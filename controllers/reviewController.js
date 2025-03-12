const Review = require('../models/reviewModel');
//const catchAsync = require('../Utils/catchAsync');
const factory = require('./../controllers/handlerFactory');
//const AppError = require('./../Utils/appError');

exports.setTourUserIds = async (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
