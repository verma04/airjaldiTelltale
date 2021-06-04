const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb");
const User = require("../models/User");

const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const moment = require('moment')
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const test = require("../models/Notifications");
const Network = require("../models/Network");
const Notifications = require("../models/Notifications");
const Sensor = require("../models/Sensor");
const RelayUser = require("../models/RelayUser");


  router.post(
    '/login',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      try {
        let user = await User.findOne({ email });

        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const payload = {
          user: {
            id: user.id,
            name:user.name,
            email:user.email
          }
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );
  router.post(
    '/register',
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;

      try {
        let user = await User.findOne({ email });

        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User already exists' }] });
        }



        user = new User({
          name,
          email,
     role:"admin",
          password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
          user: {
            id: user.id
          }
        };

        jwt.sign(
          payload,
        keys.secretOrKey,
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  );





  router.get( '/getNetworkProfile/:id',

  async (req, res) => {




    try {


     const data = await    Network.findOne({networkName: req.params.id})



     const sensors = await    Sensor.find({network: req.params.id})

     const set = {
       sensors : sensors.reverse(),
       data:data
     }
     res.json(set)







    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.get( '/getReportList/:id',

  async (req, res) => {




    try {






     const sensors = await    Sensor.find({location: req.params.id})


     res.json(sensors.reverse())







    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get( '/getNetwork',

async (req, res) => {




  try {


   const data = await    Network.find({})



 res.json(data)





  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);

router.get( '/getRealyUsers',

async (req, res) => {

 

  // const data = await RelayUser.create(req.body) 
  // console.log(data)

  try {
  const data = await  RelayUser.find({  })



    res.json(data)


  






  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);



router.get( '/getNotifications',

async (req, res) => {




  try {


   const data = await    Notifications.find({})

 res.json(data.reverse())





  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);



router.post('/addNetwork',

async (req, res) => {




  try {


    Network.findOneAndUpdate({  networkName: "Kangra"  },{  $push: { "relayNetwork": req.body  }  },  { new: true, upsert: true },function(err, doc) {






          });




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);


router.get('/NetworkUsers/:id',

async (req, res) => {




  try {


   
   const users = await RelayUser.find({})


   const arr = []
  
   users.forEach(element => {
      
  
  
    const set  =  element.relayNetwork.filter(sets => sets.relayName === req.params.id) 
   
  if(set > 0) {
    arr.push(element)
  }

     });


     res.json(users)





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);


router.get('/getRelay',

async (req, res) => {




  try {

    const net   = await   Network.find({})


   
    
    const arr = []

    net.forEach(element => {
   

      arr.push(...element.relayNetwork)
      
    });
     

    res.json(arr)
  
    





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.post('/addUser',

async (req, res) => {




  try {
  
    const { email} = req.body;
    
    const data = await RelayUser.create(req.body)
 
    res.json(data)




          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.patch('/deleteUser/:id',

async (req, res) => {




  try {
  
    
    
    const data = await RelayUser.findOneAndDelete({_id: req.params.id})
 
    res.json(data)




          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.post('/addRelay',

async (req, res) => {




  try {

    const arr =[]

  
      const data =  await Network.find({})

      data.forEach(element => {
     
          
      const err=   element.relayNetwork.filter(sets => sets.relayNetworkName === req.body.relayNetworkName) 
       
     arr.push(...err)
     
      });
      if(arr.length === 1) {
        return res
        .status(400)
        .json({ errors: { msg: 'Invalid Credentials' } });
      }
      else {

   
    Network.findOneAndUpdate({  networkName: req.body.networkName  },{  $push: { "relayNetwork": req.body  }  },  { new: true, upsert: true },function(err, doc) {


  res.json(doc)



    });
      }
    


    





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)

router.get('/getdata/:id',

async (req, res) => {

  



  try {

    
    
    const data = await Network.find({zone:req.params.id})


     const arr = []
     const final = []

     data.forEach(element => {

      arr.push(...element.relayNetwork)
       
     });
     const senor =  await Sensor.find({})
       const sensor = senor.reverse()

  
   
     arr.forEach( async element => {

      
      
      const err=   sensor.filter(sets => sets.location ===  element.relayNetworkName) 
         const set =  err.slice(0, 1)
         if(set[0].voltage < element.LowerVoltageThreshold  ) {
           final.push(set[0])
         }
     });

      res.json(final)

    





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.post('/updateThresHold',

async (req, res) => {


  try {

    const set = {
      UpperVoltageThreshold:req.body.UpperVoltageThreshold,
      LowerVoltageThreshold:req.body.LowerVoltageThreshold
    }
    
    Network.findOneAndUpdate(
      { "networkName": req.body.network, "relayNetwork.relayNetworkName": req.body.location },
      { 
          "$set": {
               "relayNetwork.$.LowerVoltageThreshold": req.body.LowerVoltageThreshold
         ,
         "relayNetwork.$.UpperVoltageThreshold": req.body.UpperVoltageThreshold
            }
      },
      function(err,doc) {
    
        res.json(doc.relayNetwork)
      }
  );
  





          




  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
)


router.post(
  '/relaylogin',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

 
    try {
      let user = await RelayUser.findOne({ email });

      

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await await RelayUser.findOne({ password })

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
          name:user.name,
          email:user.email
        }
      };

      jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ 
          token,
          user_id: user.id,
          name:user.name,
          email:user.email,
          avatar: user.avatar
        });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);



router.get(
  '/relayUserNotification/:id',
  async (req, res) => {
  
 
    try {
      let user = await RelayUser.findOne({ _id: req.params.id });

      
  res.json(user.notifications.reverse()
    )
      

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.get(
  '/relayUserRelay/:id',
  async (req, res) => {
  
 
    try {
      const senor =  await Sensor.find({})
      const sensor = senor.reverse()
  console.log(sensor)
      let user = await RelayUser.findOne({ _id: req.params.id });

      
  res.json(user.relayNetwork.reverse())
    

      

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
module.exports = router;