function convertHtmlToText(text) {
  var temp = ''
  var color = '';
  for (var i = 1; i < text.length - 1; i++) {
    if (color == '') {
      if (text[i] == '<') temp += '&lt;'
      else if (text[i] == '>') temp += '&gt;'
      else if (text[i] == '+' && text[i-1] == '\n') color = '<span class="success">' + text[i];
      else if (text[i] == '-' && text[i-1] == '\n') color = '<span class="error">' + text[i];
      else temp += text[i]
    }
    else {
      if (text[i] == '<') color += '&lt;'
      else if (text[i] == '>') color += '&gt;'
      else if (text[i] == '\n') {
        temp += color + '</span>\n'
        color = ''
      }
      else color += text[i]
    }
  }

  if (color != '') temp += color + '</span>\n'
  return temp
}
