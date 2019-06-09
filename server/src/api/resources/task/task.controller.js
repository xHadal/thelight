import Task from './task.model';
import Joi from 'joi';


const ObjectId = require('mongoose').Types.ObjectId;



export default {
    add(req, res) {
      const schema = Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().optional(),
        category: Joi.string().required(),
        date: Joi.string().required(),
        location: Joi.string().optional(),
        difficulty: Joi.number()
            .integer()
            .min(0)
            .max(5)
            .optional()
        });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      Task.create(value)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500).send(err));
    },
    get(req, res) {
      const { id } = req.params;
      if (ObjectId.isValid(id)) {
        Task.findById({
          _id: req.params.id
        })
          .then(task => {
            if (!task) {
              return res.status(404).json({err: 'Couldn\'t find task'});
            }
            return res.json(task); 
  
          })
          .catch(() => res.status(500).json({err: 'Couldn\'t find task'}));
      } else {
        return res.status(404).json({err: 'Couldn\'t find task'});
      }
    },

    remove(req, res) {
        new Promise((resolve) => {
          resolve('Remove task');
        })
          .then((msg) => res.json({ msg }))
          .catch(err => res.status(500).send(err));
    },
    edit(req, res) {
        new Promise((resolve) => {
            resolve('Edit task');
        })
          .then((msg) => res.json({ msg }))
          .catch(err => res.status(500).send(err));
    },
    list(req, res) {
        new Promise((resolve) => {
            resolve('List tasks');
            
        })
          .then((msg) => res.json({ msg }))
          .catch(err => res.status(500).send(err));
    }
};
