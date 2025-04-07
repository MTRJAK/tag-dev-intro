const data = {
  "성장과정": "저는 어릴 적부터 문제 해결에 흥미를 느꼈고...",
  "성격의 장단점": "꼼꼼함은 저의 강점이며, 때로는 완벽주의적 성향이...",
  "지원동기": "회사의 가치관과 저의 목표가 일치하여 지원하게 되었습니다.",
  "입사 후 포부": "끊임없이 배우고 성장하여 팀에 기여하는 인재가 되고 싶습니다."
};

function showModal(title) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-text').innerText = data[title];
  document.getElementById('modal').style.display = "block";
}

function hideModal() {
  document.getElementById('modal').style.display = "none";
}
