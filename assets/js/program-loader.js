function get_current_profile() {
	return window.location.hash.slice(1);
}

var editor = ace.edit("editor");
//editor.setTheme("ace/theme/monokai");
editor.setReadOnly(true);
editor.getSession().setTabSize(4);
document.getElementById('editor').style.fontSize='12px';
editor.$blockScrolling = Infinity

// load file
$.get( "programs/" + get_current_profile() + ".js", function( data ) {
	editor.setValue(data);
	editor.getSession().setMode("ace/mode/javascript");
	editor.clearSelection();
	editor.gotoLine(1, 0, false);
});
