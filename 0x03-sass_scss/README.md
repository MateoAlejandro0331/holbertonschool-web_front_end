<h1 class="gap">0x03. Sass &amp; Scss</h1>
<div data-react-class="tags/Tags" data-react-props="{&quot;tags&quot;:[]}" data-react-cache-id="tags/Tags-0">&nbsp;</div>
<div data-react-class="projects/ProjectMetadata" data-react-props="{&quot;metadata&quot;:{&quot;author&quot;:&quot;Guillaume, CTO at Holberton School&quot;,&quot;weight&quot;:1,&quot;correction&quot;:{&quot;released&quot;:true,&quot;auto_correction_available_at&quot;:&quot;2022-12-08T12:00:00.000-05:00&quot;,&quot;requires_auto_correction&quot;:true,&quot;requires_manual_correction&quot;:false},&quot;bpi&quot;:{&quot;current&quot;:true,&quot;started&quot;:false,&quot;in_second_deadline&quot;:false,&quot;starts_at&quot;:&quot;2022-12-08T00:00:00.000-05:00&quot;,&quot;ends_at&quot;:&quot;2022-12-09T00:00:00.000-05:00&quot;,&quot;second_deadline_at&quot;:&quot;2022-12-15T00:00:00.000-05:00&quot;}}}" data-react-cache-id="projects/ProjectMetadata-0">
<ul id="project-metadata" class="list-group metadata">
<li class="list-group-item">&nbsp;By:&nbsp;Guillaume, CTO at Holberton School</li>
<li class="list-group-item">&nbsp;Weight:&nbsp;1</li>
<li class="list-group-item">&nbsp;Project will start&nbsp;<span title="" data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" data-original-title="2022-12-08 00:00 (GMT-05:00)"><span class="datetime">Dec 8, 2022 12:00 AM</span></span>, must end by&nbsp;<span title="" data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" data-original-title="2022-12-09 00:00 (GMT-05:00)"><span class="datetime">Dec 9, 2022 12:00 AM</span></span></li>
<li class="list-group-item">&nbsp;was&nbsp;released at&nbsp;<span title="" data-container="body" data-html="false" data-placement="auto top" data-toggle="tooltip" data-original-title="2022-12-08 12:00 (GMT-05:00)"><span class="datetime">Dec 8, 2022 12:00 PM</span></span></li>
<li class="list-group-item">&nbsp;An auto review will be launched at the deadline</li>
</ul>
</div>
<div id="project-description" class="panel panel-default">
<div class="panel-body">
<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2018/5/9936ba361a3962278900.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20221208%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20221208T220426Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=4fc7ef3da52eb49594cbfc7d17b2e8b774f07354822f894cba7b8d1cd23c3119" alt="" /></p>
<h2>Resources</h2>
<p><strong>Read or watch</strong>:</p>
<ul>
<li><a title="Sass Basics" href="https://intranet.hbtn.io/rltoken/ayoQ7NtS8w7tZvyeqhkzsw" target="_blank">Sass Basics</a></li>
<li><a title="Sass flow control directives: @if, @for, @each and @while" href="https://intranet.hbtn.io/rltoken/AJoY0kBondaDK1SNp4B4VA" target="_blank">Sass flow control directives: @if, @for, @each and @while</a></li>
<li><a title="Sass references" href="https://intranet.hbtn.io/rltoken/kf_4QcS6Jj-_cePDrNrAlw" target="_blank">Sass references</a></li>
</ul>
<h2>Learning Objectives</h2>
<p>At the end of this project, you are expected to be able to&nbsp;<a title="explain to anyone" href="https://intranet.hbtn.io/rltoken/IwfUKr71vUBn9cnqp_hVaQ" target="_blank">explain to anyone</a>,&nbsp;<strong>without the help of Google</strong>:</p>
<h3>General</h3>
<ul>
<li>What Sass means</li>
<li>How to write Sass &amp; Scss file</li>
<li>What is the difference between Sass and Scss</li>
<li>What is the Sass preprocessing</li>
<li>How to declare a variable</li>
<li>How to use nested definition</li>
<li>How to import a Sass file</li>
<li>How to use mixins</li>
<li>How to declare extend/inheritance styles</li>
<li>How to manipulate operators</li>
</ul>
<h2>Requirements</h2>
<h3>General</h3>
<ul>
<li>Allowed editors:&nbsp;<code>vi</code>,&nbsp;<code>vim</code>,&nbsp;<code>emacs</code></li>
<li>All your files will be executed on Ubuntu 18.04 LTS using&nbsp;<code>Sass 3.7.4</code>&nbsp;(or higher)</li>
<li>All your files should end with a new line</li>
<li>All your Scss files should have a comment at the beginning (i.e. syntax above)</li>
<li>All your files should start by a comment describing the task</li>
<li>A&nbsp;<code>README.md</code>&nbsp;file, at the root of the folder of the project, is mandatory</li>
<li>The length of your files will be tested using&nbsp;<code>wc</code></li>
</ul>
<h2>More Info</h2>
<h3>Comments for your Scss file:</h3>
<p><strong>All your Scss file must start with a comment block</strong></p>
<pre><code>$ cat my_styles.scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}
$
</code></pre>
<h3>Install Sass/Scss on Ubuntu 18.04 LTS</h3>
<pre><code>$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
Ruby Sass 3.7.4
</code></pre>
<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2018/5/ea3f78848fbf9b717e91.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20221208%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20221208T220426Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=0fa35053f7d775ab21952aa2aed264a8efd9cff55286ace9fcd363a9b826ac2b" alt="" /></p>
</div>
</div>
<div id="project-quiz-questions-title" class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">Quiz questions</h3>
</div>
</div>