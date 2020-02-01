<div className="template-detail">
  {/* Brief */}
  <TestComponentheader name={props.sets[selected].name} author={props.sets[selected].author} logo={logo}></TestComponentheader>
  {/* Details */}
  <div className="content">
    <div class="field is-grouped">
      <p class="control">
        <button className="button is-gray is-small">
          <span className="icon"><i class="fas fa-paperclip"></i></span>
          <span>Attach</span>
        </button>
      </p>
      <p class="control">
        <button className="button is-gray is-small">
          <span className="icon"><i class="fas fa-link"></i></span>
          <span>Link</span>
        </button>
      </p>
    </div>
    <div className="description">
      <p className="gray-text">Description:</p>
      <p>{props.sets[selected].desc}</p>
    </div>
    <div className="content-list">
      <p className="gray-text">Steps:</p>
    </div>
  </div>
</div>