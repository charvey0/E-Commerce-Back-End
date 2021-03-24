const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint




router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{
  // be sure to include its associated Product data
  model: Product,
      }]
    });
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});




router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product,
      }]
    });

    if (!tagData) {
      res.status(404).json({
        message: 'Invalid tag id.  Please try again.'
      });
      return;
    }
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});




router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
      tag_name: "Basketball"
    }
  */
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json({
      message: 'Tag has been created.'
    });

  } catch (err) {
    res.status(500).json(err);
  };
});




router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
  
  if (!tagData) {
    res.status(404).json({
      message: 'Invalid tag id.  Please try again.'
    });
    return;
  }
  res.status(200).json({
    message: 'Tag has been updated.'
  });
  return;

} catch (err) {
  res.status(500).json(err);
}

});




router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({
        message: 'Invalid tag id.  Please try again.'
      });
      return;
    }
    res.status(200).json({
      message: 'Tag has been deleted.'
    });

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
