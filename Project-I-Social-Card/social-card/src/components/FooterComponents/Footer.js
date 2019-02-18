import React from "react";
import "./Footer.css";

export default function() {
  return (
    <div className="footerContainer">
      <i class="far fa-comment" onClick={handleComment} />
      <div>
        <i class="fas fa-retweet" onClick={handleShare} />
        <span id="shareNum">6</span>
      </div>
      <div>
        <i class="far fa-heart" onClick={handleFav} />
        <span id="favNum">4</span>
      </div>
      <i class="far fa-envelope" onClick={handleSend} />
    </div>
  );
}

function handleComment() {}
function handleShare() {
  let shareNum = $("shareNum");
  shareNum.innerHTML = Number(shareNum.innerHTML) + 1;
}
function handleFav() {
  let favNum = $("favNum");
  favNum.innerHTML = Number(favNum.innerHTML) + 1;
}
function handleSend() {}

function $(id) {
  return document.getElementById(id);
}
