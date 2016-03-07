var Result = React.createClass({
  render: function(){
    return (

        <div className="result">
          <div className="resultTitleDesc">
            <a href={this.props.link} target="_blank">
              <h2 className="resultTitle">
                {this.props.title}
              </h2>
            </a>
              &quot;<i>{this.props.desc}</i>&quot;
          </div>
          <p>{this.props.link}</p>
        </div>

    );
  }
});

var ResultsList = React.createClass({
  render: function() {
    var resultNodes = this.props.titles.map(function(title, i){
      return (
        <Result title={title} desc={this.props.descs[i]} link={this.props.links[i]} key={i}/>
      );
    }.bind(this));

    return (
      <div className="resultList">
        {resultNodes}
      </div>
    );

  }
});

var ResultsWindow = React.createClass({
  getInitialState: function(){
    return {
      titles: [],
      descs: [],
      links: []
    };
  },
  searchWiki: function(search){
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      type: 'GET',
      dataType: 'jsonp',
      headers: { 'Api-User-Agent': 'CeraSearch/1.0' },
      data: {
        action: 'opensearch',
        search: search,
        limit: 10,
        format: 'json',
        warningsaserror: true
      }
    })
    .done(function(results) {
      console.log(results);
      this.setState({
        titles: results[1],
        descs: results[2],
        links: results[3]
      });
      console.log("success");
    }.bind(this))
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  },
  componentDidMount: function(){
    $('#search-box').keypress(function(event) {
      if(event.keyCode === 13){
        var input = $("#search-box").val();
        if(input){
          this.searchWiki(input);
        }
      }
    }.bind(this));
    $("#search-button").click(function() {
      var input = $("#search-box").val();
      if(input){
        this.searchWiki(input);
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div className="resultsWindow">
        <ResultsList titles={this.state.titles} descs={this.state.descs} links={this.state.links}/>
      </div>
    );
  }
});


ReactDOM.render(
  <ResultsWindow />,
  document.getElementById("results")
);
