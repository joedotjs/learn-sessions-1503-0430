var blogEntries = [
    {
        title: 'How to use React',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti dolorum exercitationem facere impedit in ipsa, laudantium necessitatibus, porro quaerat, quo reiciendis totam voluptatem? Culpa dolorem dolores nulla voluptatem voluptates.',
        timestamp: Date.now()
    },
    {
        title: 'How to use properties',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti dolorum exercitationem facere impedit in ipsa, laudantium necessitatibus, porro quaerat, quo reiciendis totam voluptatem? Culpa dolorem dolores nulla voluptatem voluptates.',
        timestamp: Date.now()
    },
    {
        title: 'How to use state',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti dolorum exercitationem facere impedit in ipsa, laudantium necessitatibus, porro quaerat, quo reiciendis totam voluptatem? Culpa dolorem dolores nulla voluptatem voluptates.',
        timestamp: Date.now()
    },
    {
        title: 'What is with this chair',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti dolorum exercitationem facere impedit in ipsa, laudantium necessitatibus, porro quaerat, quo reiciendis totam voluptatem? Culpa dolorem dolores nulla voluptatem voluptates.',
        timestamp: Date.now()
    }
];

var ajaxBlogData = function (cb) {
    setTimeout(function () {
        cb(blogEntries);
    }, 2000);
};

var App = React.createClass({
    getInitialState: function () {
        return {
            blogEntries: []
        };
    },
    componentDidMount: function () {
        var self = this;
        ajaxBlogData(function (blogs) {
            self.setState({ blogEntries: blogs });
        });
    },
    createBlogElement: function (blogEntry) {
        return <BlogArticle entry={blogEntry} />;
    },
    render: function () {
        console.log('Rendering!');
        var blogArticleElements = this.state.blogEntries.map(this.createBlogElement);
        return (
            <div id="blog">
                {blogArticleElements}
            </div>
        );
    }
});

var BlogArticle = React.createClass({
    getInitialState: function () {
        return {
          timestamp: Date.now()
        };
    },
    updateTimestamp: function () {
        this.setState({ timestamp: Date.now() });
    },
    render: function () {
        return (
            <div className="blog-article">
                <BlogTitle title={this.props.entry.title} />
                <p>{this.props.entry.body}</p>
                <h5 onClick={this.updateTimestamp}>{this.state.timestamp}</h5>
            </div>
        );
    }
});

var BlogTitle = React.createClass({
    render: function () {
        return <h1>{this.props.title}</h1>;
    }
});

React.render(<App />, document.body);