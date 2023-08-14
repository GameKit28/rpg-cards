// ============================================================================
// Card definition related functions
// ============================================================================
function card_default_options() {
    return {
        foreground_color: "white",
        background_color: "white",
        default_color: "black",
        default_icon: "ace.png",
        default_title_size: "13",
        page_size: "A4",
        page_rows: 3,
        page_columns: 3,
        card_arrangement: "doublesided",
        card_size: "25x35",
        card_count: null,
        title_icon_size: "standard",
        rounded_corners: true
    };
}

function card_default_data() {
    return {
        count: 1,
        title: "New card",
        contents: [],
        tags: []
    };
}

function card_init(card) {
    card.title = card.title || "";
    card.contents = card.contents || [];
    card.tags = card.tags || [];
}

function card_has_tag(card, tag) {
    tag = tag.trim().toLowerCase();
    var index = card.tags.indexOf(tag);
    return index > -1;
}

function card_add_tag(card, tag) {
    tag = tag.trim().toLowerCase();
    var index = card.tags.indexOf(tag);
    if (index === -1) {
        card.tags.push(tag);
    }
}

function card_remove_tag(card, tag) {
    tag = tag.trim().toLowerCase();
    card.tags = card.tags.filter(function (t) {
        return tag !== t;
    });
}

// ============================================================================
// Card definition related functions
// ============================================================================

function card_data_color_front(card_data, options) {
    return card_data.color_front || card_data.color || options.default_color || "black";
}

function card_data_color_back(card_data, options) {
    return card_data.color_back || card_data.color || options.default_color || "black";
}

function card_data_icon_front(card_data, options) {
    return card_data.icon_front || card_data.icon || options.default_icon || "ace.png";
}

function card_data_icon_back(card_data, options) {
    return card_data.icon_back || card_data.icon || options.default_icon || "ace.png";
}

function card_data_split_params(value) {
    return value.split("|").map(function (str) { return str.trim(); });
}

// ============================================================================
// Card element generating functions
// ============================================================================

function card_element_title(card_data, options) {
    var title = card_data.title || "";
    var title_size = card_data.title_size || options.default_title_size || 'normal';
    return '<div class="card-title card-title-' + title_size + '">' + title + '</div>';
}

function card_element_icon(card_data, options, tsv_data) {
    var icons_to_split = parse_tsv_snippet(card_data, tsv_data, card_data_icon_front(card_data, options));
    var icons = icons_to_split.split(',');
    var classname;
    switch(options.title_icon_size){
        case "inline": 
            classname = "inlineicon";
            break;
        case "hidden": 
            classname = "hiddenicon";
            break;
        case "standard": 
        default:
            classname = "icon";
            break;
    }

    var result = "";
    result += '<div class="card-title-' + classname + '-container">';
    result += icons.map(function (value)
    {
        return '<img class="card-title-' + classname + '" src=' + value + '></img>';
    });
    result += '</div>';
    return result;
}

function card_element_subtitle(params, card_data, options) {
    var subtitle = params[0] || "";
    return '<div class="card-element card-subtitle">' + subtitle + '</div>';
}

function card_element_content_icons(params, card_data, options) {
    var result = "";
    var icons_to_split = params[0] || "";
    var icons = icons_to_split.split(',');
    var size = params[1] || "40";
    var align = params[2] || "center";
    var color = card_data_color_front(card_data, options);
    result += '<div class="card-element" style="display:flex;justify-content:' + align + ';">';
    result += icons.map(function (value)
    {
        if(!value) return "";
        return '<div class="card-element card-content-icon" style="height:' + size + 'px;min-height:' + size + 'px;width: ' + size + 'px;background-color: ' + color + ';background-image: url(\'' + value + '\');"></div>';
    });
    result += '</div>';
    return result;
}

function card_element_picture(params, card_data, options) {
    var url = params[0] || "";
    var height = params[1] || "80";
    return '<img class="card-element card-picture" src=' + url + ' style="height:' + height + 'px"></img>';
}

function card_element_ruler(params, card_data, options) {
    var color = card_data_color_front(card_data, options);
    var fill = 'fill="' + color + '"';
    var stroke = 'stroke="' + color + '"';

    var result = "";
    result += '<svg class="card-ruler" height="1" width="100" viewbox="0 0 100 1" preserveaspectratio="none" xmlns="http://www.w3.org/2000/svg">';
    result += '    <polyline points="0,0 100,0.5 0,1" ' + fill + '></polyline>';
    result += '</svg>';
    return result;
}

function card_element_boxes(params, card_data, options) {
    var color = card_data_color_front(card_data, options);
    var fill = ' fill="none"';
    var stroke = ' stroke="' + color + '"';
    var count = params[0] || 1;
    var size = params[1] || 3;
    var style = 'style="width:' + size + 'em;height:' + size + 'em"';

    var result = "";
    result += '<div class="card-element card-description-line">';
    for (var i = 0; i < count; ++i) {
        result += '<svg class="card-box" height="100" width="100" viewbox="0 0 100 100" preserveaspectratio="none" xmlns="http://www.w3.org/2000/svg" ' + style + '>';
        result += '    <rect x="5" y="5" width="90" height="90" ' + fill + stroke + ' style="stroke-width:10">';
        result += '</svg>';
    }
    result += '</div>';
    return result;
}

function card_element_property(params, card_data, options) {
    var result = "";
    result += '<div class="card-element card-property-line">';
    result += '   <h4 class="card-property-name">' + params[0] + '</h4>';
    result += '   <p class="card-p card-property-text">' + params[1] + '</p>';
	if (params[2])
	{
		result += '   <div style="float:right">';
		result += '       <h4 class="card-property-name">' + params[2] + '</h4>';
		result += '       <p class="card-p card-property-text">' + params[3] + '</p>';
		result += '   </div>';
	}
    result += '</div>';
    return result;
}

function card_element_description(params, card_data, options) {
    var result = "";
    result += '<div class="card-element card-description-line">';
    result += '   <h4 class="card-description-name">' + params[0] + '</h4>';
    result += '   <p class="card-p card-description-text">' + params[1] + '</p>';
    result += '</div>';
    return result;
}

function card_element_text(params, card_data, options) {
    var result = "";
    result += '<div class="card-element card-description-line">';
    result += '   <p class="card-p card-description-text">' + params[0] + '</p>';
    result += '</div>';
    return result;
}

function card_element_center(params, card_data, options) {
    var result = "";
    result += '<div class="card-element card-description-line" style="text-align: center">';
    result += '   <p class="card-p card-description-text">' + params[0] + '</p>';
    result += '</div>';
    return result;
}

function card_element_justify(params, card_data, options) {
    var result = "";
    result += '<div class="card-element card-description-line" style="text-align: justify; hyphens: auto">';
    result += '   <p class="card-p card-description-text">' + params[0] + '</p>';
    result += '</div>';
    return result;
}

function card_element_dndstats(params, card_data, options) {
    var stats = [10, 10, 10, 10, 10, 10];
    var mods = [0,0,0,0,0,0];
    for (var i = 0; i < 6; ++i) {
        stats[i] = parseInt(params[i], 10) || 0;
        var mod = Math.floor(((stats[i] - 10) / 2));
        if (mod >= 0) {
            mod = "+" + mod;
        } else {
            mod = "" + mod;
        }
        mods[i] = "&nbsp;(" + mod + ")";
    }

    var result = "";
    result += '<table class="card-stats">';
    result += '    <tbody><tr>';
    result += '      <th class="card-stats-header">STR</th>';
    result += '      <th class="card-stats-header">DEX</th>';
    result += '      <th class="card-stats-header">CON</th>';
    result += '      <th class="card-stats-header">INT</th>';
    result += '      <th class="card-stats-header">WIS</th>';
    result += '      <th class="card-stats-header">CHA</th>';
    result += '    </tr>';
    result += '    <tr>';
    result += '      <td class="card-stats-cell">' + stats[0] + mods[0] + '</td>';
    result += '      <td class="card-stats-cell">' + stats[1] + mods[1] + '</td>';
    result += '      <td class="card-stats-cell">' + stats[2] + mods[2] + '</td>';
    result += '      <td class="card-stats-cell">' + stats[3] + mods[3] + '</td>';
    result += '      <td class="card-stats-cell">' + stats[4] + mods[4] + '</td>';
    result += '      <td class="card-stats-cell">' + stats[5] + mods[5] + '</td>';
    result += '    </tr>';
    result += '  </tbody>';
    result += '</table>';
    return result;
}

function card_element_bullet(params, card_data, options) {
    var result = "";
    result += '<ul class="card-element card-bullet-line">';
    result += '   <li class="card-bullet">' + params[0] + '</li>';
    result += '</ul>';
    return result;
}

function card_element_section(params, card_data, options) {
    var color = card_data_color_front(card_data, options);
    var section = params[0] || "";
    return '<h3 class="card-section" style="color:' + color + '">' + section + '</h3>';
}

function card_element_fill(params, card_data, options) {
    var flex = params[0] || "1";
    return '<span class="card-fill" style="flex:' + flex + '"></span>';
}

function card_element_unknown(params, card_data, options) {
    return '<div>Unknown element: ' + params.join('<br />') + '</div>';
}

function card_element_empty(params, card_data, options) {
    return '';
}

var card_element_generators = {
    subtitle: card_element_subtitle,
    property: card_element_property,
    rule: card_element_ruler,
    ruler: card_element_ruler,
    boxes: card_element_boxes,
    description: card_element_description,
    dndstats: card_element_dndstats,
    text: card_element_text,
    center: card_element_center,
    justify: card_element_justify,
    bullet: card_element_bullet,
    fill: card_element_fill,
    section: card_element_section,
    disabled: card_element_empty,
    picture: card_element_picture,
    icon: card_element_content_icons
};

// ============================================================================
// Card generating functions
// ============================================================================

function card_generate_contents(contents, card_data, options, tsv_data) {
    var result = "";
    
    //Fill the container with a background image if provided
    var background_style = "";
    var url = parse_tsv_snippet(card_data, tsv_data, card_data.background_image_front);
    if (url) {
        background_style = 'style ="background-image: url(&quot;' + url + '&quot;); background-size: cover; background-position: center;"';
    }

    result += '<div class="card-content-container"' + background_style + '>';
    result += contents.map(function (value) {
        value = parse_tsv_snippet(card_data, tsv_data, value);
        var parts = card_data_split_params(value);
        var element_name = parts[0];
        var element_params = parts.splice(1);
        var element_generator = card_element_generators[element_name];
        if (element_generator) {
            return element_generator(element_params, card_data, options);
        } else if (element_name.length > 0) {
            return card_element_unknown(element_params, card_data, options);
        }
    }).join("\n");
    result += '</div>';
    return result;
}

function card_repeat(card, count) {
    var result = [];
    for (var i = 0; i < count; ++i) {
        result.push(card);
    }
    return result;
}

function parse_tsv_snippet(card, tsv_data, str) {
    if (tsv_data.size != 0 && str){
        if(tsv_data.has(card.title)){
            str = str.replace(/\{\{(.*?)\}\}/g, (match) => {
                var substr = match.substring(2, match.length - 2);
                console.log("match found: " + substr);
                var tsv_value = tsv_data.get(card.title)[substr];
                if(tsv_value === undefined){
                    tsv_value = "NOT FOUND";
                    console.log("Column named " + substr + " not found in tsv file");
                }
                console.log("Value: \"" + tsv_value + "\"");
                return tsv_value;
            });
        }
    }

    return str;
}

function card_generate_color_style(color, options) {
    return 'style="color:' + color + '; border-color:' + color + '; background-color:' + color + '"';
}

function card_generate_color_gradient_style(color, options) {
    return 'style="background: radial-gradient(ellipse at center, white 20%, ' + color + ' 120%)"';
}

function card_generate_front(data, options, tsv_data) {
    var color = card_data_color_front(data, options);
    var style_color = card_generate_color_style(color, options);

    var result = "";
    result += '<div id="card-render-front" class="card card-size-' + options.card_size + ' ' + (options.rounded_corners ? 'rounded-corners' : '') + '" ' + style_color + '>';
    result += card_element_icon(data, options, tsv_data);
    result += card_element_title(data, options);
    result += card_generate_contents(data.contents, data, options, tsv_data);
    result += '</div>';

    return result;
}

function card_generate_back(data, options, tsv_data) {
    var color = card_data_color_back(data, options);
    var style_color = card_generate_color_style(color, options);
	var url = parse_tsv_snippet(data, tsv_data, data.background_image);
	var background_style = "";
	if (url)
	{
		background_style = 'style = "background-image: url(&quot;' + url + '&quot;); background-size: contain; background-position: center; background-repeat: no-repeat;"';
	}
	else 
	{
		background_style = card_generate_color_gradient_style(color, options);
    }
	var icon = parse_tsv_snippet(data, tsv_data, card_data_icon_back(data, options));

    var result = "";
    result += '<div id="card-render-back" class="card card-size-' + options.card_size + ' ' + (options.rounded_corners ? 'rounded-corners' : '') + '" ' + style_color + '>';
    result += '  <div class="card-back" ' + background_style + '>';
	if (!url)
	{
		result += '    <div class="card-back-inner">';
		result += '      <div class="card-back-icon" style = "background-image: url(\'' + icon + '\'); background-color: ' + color + '"></div>';
		result += '    </div>';
	}
    result += '  </div>';
    result += '</div>';

    return result;
}

function card_generate_empty(count, options) {
    var style_color = card_generate_color_style("white");

    var result = "";
    result += '<div class="card card-size-' + options.card_size + '" ' + style_color + '>';
    result += '</div>';

    return card_repeat(result, count);
}

// ============================================================================
// Functions that generate pages of cards
// ============================================================================

function card_pages_split(data, rows, cols) {
    var cards_per_page = rows * cols;
    var result = [];
    for (var i = 0; i < data.length; i += cards_per_page) {
        var page = data.slice(i, i + cards_per_page);
        result.push(page);
    }
    return result;
}

function card_pages_merge(front_pages, back_pages) {
    var result = [];
    for (var i = 0; i < front_pages.length; ++i) {
        result.push(front_pages[i]);
        result.push(back_pages[i]);
    }
    return result;
}

function cards_pages_flip_left_right(cards, rows, cols) {
    var result = [];
    for (var r = 0; r < rows; ++r) {
        for (var c = 0; c < cols; ++c) {
            var i = r*cols + (cols-1-c);
            result.push(cards[i]);
        }
    }
    return result;
}

function card_pages_add_padding(cards, options) {
    var cards_per_page = options.page_rows * options.page_columns;
    var last_page_cards = cards.length % cards_per_page;
    if (last_page_cards !== 0) {
        return cards.concat(card_generate_empty(cards_per_page - last_page_cards, options));
    } else {
        return cards;
    }
}

function card_pages_interleave_cards(front_cards, back_cards, options) {
    var result = [];
    var i = 0;
    while (i < front_cards.length) {
        result.push(front_cards[i]);
        result.push(back_cards[i]);
        if (options.page_columns > 2) {
            result.push(card_generate_empty(options.page_columns - 2, options));
        }
        ++i;
    }
    return result;
}

function card_pages_wrap(pages, options) {
    var size = options.page_size || "A4";

    var result = "";
    for (var i = 0; i < pages.length; ++i) {
        var style = "";
        if ((options.card_arrangement === "doublesided") &&  (i % 2 === 1)) {
            style += 'style="background-color:' + options.background_color + '"';
        } else {
            style += 'style="background-color:' + options.foreground_color + '"';
        }
        result += '<page class="page page-preview" size="' + size + '" ' + style + '>\n';
        result += pages[i].join("\n");
        result += '</page>\n';
    }
    return result;
}

function card_pages_generate_style(options) {
    var size = "a4";
    switch (options.page_size) {
        case "A3": size = "A3 portrait"; break;
        case "A4": size = "210mm 297mm"; break;
        case "A5": size = "A5 portrait"; break;
        case "Letter": size = "letter portrait"; break;
        case "25x35": size = "2.5in 3.5in"; break;
        default: size = "auto";
    }

    var result = "";
    result += "<style>\n";
    result += "@page {\n";
    result += "    margin: 0;\n";
    result += "    size:" + size + ";\n";
    result += "    -webkit-print-color-adjust: exact;\n";
    result += "}\n";
    result += "</style>\n";
    return result;
}

function card_pages_generate_html(card_data, options, tsv_data) {
    options = options || card_default_options();
    var rows = options.page_rows || 3;
    var cols = options.page_columns || 3;

    // Generate the HTML for each card
    var front_cards = [];
    var back_cards = [];
    card_data.forEach(function (data) {
        var count = options.card_count || data.count || 1;
        var front = card_generate_front(data, options, tsv_data);
        var back = card_generate_back(data, options, tsv_data);
        front_cards = front_cards.concat(card_repeat(front, count));
        back_cards = back_cards.concat(card_repeat(back, count));
    });

    var pages = [];
    if (options.card_arrangement === "doublesided") {
        // Add padding cards so that the last page is full of cards
        front_cards = card_pages_add_padding(front_cards, options);
        back_cards = card_pages_add_padding(back_cards, options);

        // Split cards to pages
        var front_pages = card_pages_split(front_cards, rows, cols);
        var back_pages = card_pages_split(back_cards, rows, cols);

        // Shuffle back cards so that they line up with their corresponding front cards
        back_pages = back_pages.map(function (page) {
            return cards_pages_flip_left_right(page, rows, cols);
        });

        // Interleave front and back pages so that we can print double-sided
        pages = card_pages_merge(front_pages, back_pages);
    } else if (options.card_arrangement === "front_only") {
        var cards = card_pages_add_padding(front_cards, options);
        pages = card_pages_split(cards, rows, cols);
    } else if (options.card_arrangement === "side_by_side") {
        var cards = card_pages_interleave_cards(front_cards, back_cards, options);
        cards = card_pages_add_padding(cards, options);
        pages = card_pages_split(cards, rows, cols);
    }

    // Wrap all pages in a <page> element and add CSS for the page size
    var result = "";
    result += card_pages_generate_style(options);
    result += card_pages_wrap(pages, options);

    return result;
}

function card_pages_insert_into(card_data, container) {

    // Clear the previous content of the document
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    // Insert the HTML
    var html = card_pages_generate_html(card_data);
    container.innerHTML = html;
}
