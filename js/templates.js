Ember.TEMPLATES['header'] = Ember.Handlebars.compile(''+
    '<div class="header"></div>'+
    '<div class="container">'+
    '<div class="navbar navbar-inverse navbar-fixed-top" style="z-index: 10;">'+
    '    <div class="navbar-inner">'+
    '        <div class="container">'+
    '            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">'+
    '                <span class="icon-bar"></span>'+
    '                <span class="icon-bar"></span>'+
    '                <span class="icon-bar"></span>'+
    '            </a>'+
    '            <a class="brand" href="#">Node Cellar</a>'+
''+
    '           <div class="nav-collapse collapse">'+
''+
    '                  <ul class="nav">'+
    '                    <li class="add-menu"><a href="#/wines">Browse Wines</a></li>'+
    '                   <li><a href="#/add"><i class="icon-edit icon-white"></i>Add Wine</a></li>'+
    '                </ul>'+
''+
    '               <ul class="nav pull-right">'+
    '                    <li class="about-menu"><a href="#/about">About</a></li>'+
    '                    <li class="dropdown">'+
    '                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Resources <b class="caret"></b></a>'+
    '                        <ul class="dropdown-menu">'+
    '                            <li><a href="http://emberjs.org" target="_blank">Ember.js</a></li>'+
    '                            <li><a href="http://twitter.github.com/bootstrap/" target="_blank">Twitter Bootstrap</a></li>'+
    '                                    <li class="divider"></li>'+
    '                                    <li class="nav-header">This App</li>'+
    '                                    <li><a href="#" target="_blank">GitHub Repository</a></li>'+
    '                                    <li><a href="http://devgirl.org" target="_blank">Authors Blog</a></li>'+
    '                                </ul>'+
    '                            </li>'+
    '                        </ul>'+
    '                   </div>'+
    '           </div>'+
    '       </div>'+
    '   </div>'
);

Ember.TEMPLATES['home'] = Ember.Handlebars.compile('' +
'<div class="home-hero">'+
    '   <h1>Welcome to Node Cellar</h1>'+
    '   <h3>A sample application built with Ember.js & Twitter Bootstrap</h3>'+
    '    <br/>'+
    '    <div style="opacity: .9;">'+
    '        <a class="btn btn-large" href="#/wines"><img src="img/wine.png" class="pull-left" style="margin-right:6px;"/> Start Browsing<br/>Node Cellar</a>'+
    '        <a class="btn btn-large" href="#">'+
    '            <img src="img/github.png" class="pull-left" style="margin-right:6px"/> View Project<br>on GitHub</a>'+
    '        </div>'+
    '    </div>'+
'</div>'
);

Ember.TEMPLATES['footer'] = Ember.Handlebars.compile('' +
    '<footer class="footer">'+
        '<p class="pull-right"><a href="#">Back Home</a></p>'+
        '<p>Built as a sample application with <a href="http://emberjs.com">Ember.js</a>,'+
        '    <a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a>,'+
        '    <a href="http://devgirl.org" target="_blank">Holly Schinsky</a>.<br/>'+
        'The source code for this application is available in <a href="http://github.com/hollyschinsky/wine-cellar-ember">this repository</a> on GitHub.</p>'+
    '</footer>'
);

Ember.TEMPLATES['wines-list'] = Ember.Handlebars.compile('' +
    '<div class="row-fluid">'+
    '   <div id="content" class="span12">'+
    '       <div>'+
    '           <ul class="thumbnails">'+
    '               {{#each item in controller}}'+
    '               <li class="thumbnail plain" style="text-align:center;">'+
    '                    {{#linkTo wine item}}'+
    '                   <img {{bindAttr src="item.newPicture"}} height="150" width="125"/>'+
    '                    <h5>{{item.name}}</h5>'+
    '                   {{item.year}} {{item.grapes}}<br/>'+
    '                   <i class="icon-globe"></i> {{item.region}}, {{item.country}}'+
    '                   {{/linkTo}}'+
    '               </li>'+
    '                {{/each}}'+
    '          </ul>'+
    '       </div>'+
    '   </div>'+
    '</div>'
);

Ember.TEMPLATES['wine-edit'] = Ember.Handlebars.compile('' +
'<form class="form-horizontal span12" {{action save on="submit"}}>'+
    '<fieldset>'+
    '   <legend>Wine Details</legend>'+
    '   <div class="row-fluid">'+
    '       <div class="row">'+
    '           <div class="span8">'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Name:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="name"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Year:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="year"}}</p>'+
    '                   </div>'+
    '               </div>'+
               ''+
    '                <div class="control-group">'+
    '                   <label class="control-label">Grapes:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="grapes"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Country:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="country"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Region:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="region"}}</p>'+
    '                </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Notes:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextArea valueBinding="description"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '           </div>'+
    '           <div class="span4">'+
    '               <div class="well" style="width: 180px;text-align: center;width:50%;margin: 0px auto;">'+
    '                   <p><img id="picture" {{bindAttr src="newPicture"}} width="180"/></p>'+
    '                   <p style="color:#999;">To change the picture, drag a new picture from your file system onto the box above.</p>'+
    '               </div>'+
    '            </div>'+
    '       </div>'+
    ''+
    '     <div class="form-actions">'+
    '       <button type="submit" class="btn btn-primary">Update</button>'+
    '       <button class="btn" {{action cancel}}>Cancel</button>'+
    '       <button class="btn" {{action delete this}}>Delete</button>'+
    '     </div>'+
    '   </div>'+
    '</fieldset>'+
    '</form>'
);

Ember.TEMPLATES['wine-new'] = Ember.Handlebars.compile('' +
    '<form class="form-horizontal span12" {{action save on="submit"}}>'+
    '<fieldset>'+
    '   <legend>Wine Details</legend>'+
    '   <div class="row-fluid">'+
    '       <div class="row">'+
    '           <div class="span8">'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Name:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="name"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Year:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="year"}}</p>'+
    '                   </div>'+
    '               </div>'+
    ''+
    '                <div class="control-group">'+
    '                   <label class="control-label">Grapes:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="grapes"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Country:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="country"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Region:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextField valueBinding="region"}}</p>'+
    '                </div>'+
    '               </div>'+
    '               <div class="control-group">'+
    '                   <label class="control-label">Notes:</label>'+
    '                   <div class="controls">'+
    '                       <p>{{view Ember.TextArea valueBinding="description"}}</p>'+
    '                   </div>'+
    '               </div>'+
    '           </div>'+
    '       </div>'+
    ''+
    '     <div class="form-actions">'+
    '       <button type="submit" class="btn btn-primary">Submit</button>'+
    '       <button class="btn" {{action cancel}}>Cancel</button>'+
    '       </div>'+
    '   </div>'+
    '</fieldset>'+
    '</form>'
);

Ember.TEMPLATES['about-app'] = Ember.Handlebars.compile('' +
'<div class="row-fluid">'+
'    <div class="span12">'+
'        <img class="about-icon" src="img/download.png" width="50">'+
'            <h4>Download the source code</h4>'+
'            <p>The source code for this application is available in <a href="https://github.com/hollyschinsky/angular-cellar-basic">this repository</a> on GitHub.</p>'+
'        </div>'+
'    </div>'+
'    <br/>'+
''+
'  <div class="row-fluid">'+
'        <div class="span12">'+
'            <img class="about-icon" src="img/discuss.png" width="50" style="float: left;">'+
'                <h4>Comments and questions</h4>'+
'                <p>I love to hear your feedback. Post your questions and comments on the blog post associated with this'+
'                application.</p>'+
'        </div>'+
'  </div>'+
'  <br/>'+
'    <div class="row-fluid">'+
'        <div class="span12">'+
'            <img class="about-icon" src="img/twitter.png" width="50" style="float: left;">'+
'                <h4>Follow me on Twitter</h4>'+
'                <p><a href="http://twitter.com/devgirlfl">@devgirlfl</a></p>'+
'        </div>'+
'    </div>'+
'    <br/>'+
'    <div class="row-fluid">'+
'        <div class="span12">'+
'            <img class="about-icon" src="img/blog.png" width="50" style="float: left;">'+
'                <h4>Check out my blog</h4>'+
'                <p><a href="http://devgirl.org">http://devgirl.org</a></p>'+
'        </div>'+
'    </div>'
);
