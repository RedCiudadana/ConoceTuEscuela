(function(t){t.fn.stacktable=function(s){var a=t.extend({},{id:"stacktable small-only",hideOriginal:!0},s)
return this.each(function(){var s=t('<table class="'+a.id+'"><tbody></tbody></table>')
void 0!==typeof a.myClass&&s.addClass(a.myClass)
var d=""
$table=t(this),$table.addClass("stacktable large-only"),$topRow=$table.find("tr").eq(0),$table.find("tr").each(function(s,a){0===s||t(this).find("td,th").each(function(s,a){0===s?d+='<tr class="st-space"><td></td><td></td></tr><tr class="st-new-item"><td class="st-key">'+$topRow.find("td,th").eq(s).html()+'</td><td class="st-val st-head-row">'+t(this).html()+"</td></tr>":""!==t(this).html()&&(d+="<tr>",$topRow.find("td,th").eq(s).html()?d+='<td class="st-key">'+$topRow.find("td,th").eq(s).html()+"</td>":d+='<td class="st-key"></td>',d+='<td class="st-val">'+t(this).html()+"</td>",d+="</tr>")})}),s.append(t(d)),$table.before(s),a.hideOriginal||$table.show()})}})(jQuery)
