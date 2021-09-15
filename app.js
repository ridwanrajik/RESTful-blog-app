let bodyParser  = require('body-parser'),
mongoose    = require('mongoose'),
express = require('express'),
app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

// MONGOOSE/MODEL CONFIG
mongoose.connect('mongodb://localhost/RESTful-blog-app');
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
    
})

let Blog = mongoose.model('blog', blogSchema )

// Blog.create({
//     title: 'Blog Post 1',
//     image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
// });

// Root Route redirects to Index Route
app.get('/', function (req, res){
    res.redirect('index')
});


// Index Route
app.get('/index', function (req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log('ERROR!');
        } else {
            res.render('index',{blogs:blogs});
        }
    });
});



app.listen(process.env.port || 3000, function(){
    console.log('RESTful-blog-app server have started!');
})