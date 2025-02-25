function walk(rootNode)
{
    // Find all the text nodes in rootNode
    const walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    let node;

    // Modify each text node's value
    while ((node = walker.nextNode())) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
    // Fix some misspellings
    v = v.replace(/\b(M|m)illienial(s)?\b/g, "$1illennial$2");
    v = v.replace(/\b(M|m)illenial(s)?\b/g, "$1illennial$2");
    v = v.replace(/\b(M|m)ilennial(s)?\b/g, "$1illennial$2");
    v = v.replace(/\b(M|m)ilenial(s)?\b/g, "$1illennial$2");

    // Millennial Generation
    v = v.replace(
        /\b(?:Millennial Generation)|(?:Generation Millennial)\b/g,
        "Plissken Faction"
    );
    v = v.replace(
        /\b(?:millennial generation)|(?:generation millennial)\b/g,
        "Plissken faction"
    );

    // Millennialism
    v = v.replace(/\bMillennialism\b/g, "Reptilianism");
    v = v.replace(/\bmillennialism\b/g, "reptilianism");

    //  Gendered Millennials
    v = v.replace(/\bMillennial (M|m)(e|a)n('s)?\b/g, "Snake $1$2n$3");
    v = v.replace(/\bmillennial m(e|a)n('s)?\b/g, "snake m$1n$2");
    v = v.replace(/\bMillennial (B|b)oy('s|s(?:')?)?\b/g, "Snake $1oy$2");
    v = v.replace(/\bmillennial boy('s|s(?:')?)?\b/g, "snake boy$1");
    v = v.replace(/\bMillennial (G|g)uy('s|s(?:')?)?\b/g, "Snake $1uy$2");
    v = v.replace(/\bmillennial guy('s|s(?:')?)?\b/g, "snake guy$1");
    v = v.replace(/\bMillennial (W|w)om(e|a)n('s)?\b/g, "Snake $1om$2n$3");
    v = v.replace(/\bmillennial wom(e|a)n('s)?\b/g, "snake wom$1n$2");
    v = v.replace(/\bMillennial (G|g)irl('s|s(?:')?)?\b/g, "Snake $1irl$2");
    v = v.replace(/\bmillennial girl('s|s(?:')?)?\b/g, "snake girl$1");
    v = v.replace(/\bMillennial (G|g)al('s|s(?:')?)?\b/g, "Snake $1al$2");
    v = v.replace(/\bmillennial gal('s|s(?:')?)?\b/g, "snake gal$1");

    //  Aged Millennials
    v = v.replace(/\bMillennial Child('s)?\b/g, "Snakelet$1");
    v = v.replace(/\b[Mm]illennial child('s)?\b/g, "snakelet$1");
    v = v.replace(/\bMillennial Children(?:(')s)?\b/g, "Snakelets$1");
    v = v.replace(/\b[Mm]illennial children(?:(')s)?\b/g, "snakelets$1");
    v = v.replace(
        /\bMillennial [Tt]een(?:ager)?('s)?\b/g,
        "proto-Snake Person$1"
    );
    v = v.replace(/\bmillennial teen(?:ager)?('s)?\b/g, "proto-snake person$1");
    v = v.replace(
        /\bMillennial [Tt]een(?:ager)?(?:(s)\b(')|s\b)/g,
        "proto-Snake People$2$1"
    );
    v = v.replace(
        /\bmillennial teen(?:ager)?(?:(s)\b(')|s\b)/g,
        "proto-snake people$2$1"
    );
    v = v.replace(/\bMillennial (A|a)dult('s)?\b/g, "$1dult Snake Person$2");
    v = v.replace(/\bmillennial adult('s)?\b/g, "adult snake person$1");
    v = v.replace(
        /\bMillennial (A|a)dult(?:(s)\b(')|s\b)/g,
        "$1dult Snake People$3$2"
    );
    v = v.replace(
        /\bmillennial adult(?:(s)\b(')|s\b)/g,
        "adult snake people$2$1"
    );

    // Definition
    v = v.replace(/\bmil·len·nial\b/g, "snake peo·ple");
    v = v.replace(/\bmiˈlenēəl\b/g, "snāk ˈpēpəl");

    // Millennial
    v = v.replace(/\bMillennial\b/g, "Snake Person");
    v = v.replace(/\bmillennial\b/g, "snake person");
    v = v.replace(/\bMillennial(?:(s)\b(')|s\b)/g, "Snake People$2$1");
    v = v.replace(/\bmillennial(?:(s)\b(')|s\b)/g, "snake people$2$1");

    // The Great Recession
    v = v.replace(/\bGreat Recession\b/g, "Time of Shedding and Cold Rocks");
    v = v.replace(/\bgreat recession\b/g, "time of shedding and cold rocks");

    // The Great Depression
    v = v.replace(/\bGreat Depression\b/g, "Clutch Plague");
    v = v.replace(/\bgreat depression\b/g, "clutch plague");

    // Occupy Wall Street
    v = v.replace(
        /\b(?:the )?(?:(?:(?:occupy|ows) movement)|(?:occupy wall (?:street|st\.?)(?: movement)?))(?!\w)/gi,
        "The Great Ape-Snake War"
    );
    v = v.replace(/\bOWS\b/g, "GA-SW");
    v = v.replace(/\bows\b/g, "ga-sw");

    // Helicopter Parents
    v = v.replace(/\bHelicopter Parent(?:(s)\b(')|s\b)/g, "Thulsa Doom$2$1");
    v = v.replace(/\b[Hh]elicopter parent(?:(s)\b(')|s\b)/g, "Thoth-Amon$2$1");

    // Trophy Kids
    v = v.replace(/\bTrophy Kid(?:(s)\b(')|s\b)/g, "Quetzalcoatl's Chosen$2$1");
    v = v.replace(/\btrophy kid(?:(s)\b(')|s\b)/g, "Quetzalcoatl's chosen$2$1");

    // Digital Natives
    v = v.replace(/\bDigital Native(s)?\b/g, "Parseltongue$1");
    v = v.replace(/\bdigital native(s)?\b/g, "parseltongue$1");

    // Generation Z
    v = v.replace(/\bGeneration Z\b/g, "The Zolom's Children");
    v = v.replace(/\bgeneration Z\b/g, "the Zolom's children");
    v = v.replace(/\bZ Generation\b/g, "Children of the Zolom");
    v = v.replace(/\bz generation\b/g, "children of the Zolom");

    v = v.replace(/\b[G|g]en [Z|z]\b/g, "Zolom's kids");

    // Tweens
    // The replacement syntax here emulates a negative lookbehind to avoid replacing `'tween`
    v = v.replace( /(')?\bTween(s)?\b/g, function ($0, $1, $2) { return ($1 ? $0 : $2 ? "Neonates" : "Neonate") });
    v = v.replace( /(')?\btween(s)?\b/g, function ($0, $1, $2) { return ($1 ? $0 : $2 ? "neonates" : "neonate") });

    // Generation Y
    v = v.replace(/\b(?:Generation Y)|(?:Generation Why)\b/g,
        "Serpent Society");
    v = v.replace(/\bgen(?:eration)? ?(?:wh)?y\b/g, "serpent society");
    v = v.replace(/\bGen Y\b/g, "Society of the Serpent");

    // Generation We
    v = v.replace(/\bGeneration We\b/g, "Caduceus Cult");
    v = v.replace(/\bgeneration we\b/g, "caduceus cult");
    v = v.replace(/\bWe Generation\b/g, "Cult of the Caduceus");
    v = v.replace(/\bwe generation\b/g, "cult of the caduceus");

    // Generation Me
    v = v.replace(/\bGeneration Me\b/g, "The Cult of the Serpent");
    v = v.replace(/\bgeneration me\b/g, "the cult of the serpent");

    // Global Generation
    v = v.replace(/\bGlobal Generation\b/g, "Tannin's Horde");
    v = v.replace(/\bglobal generation\b/g, "Tannin's horde");
    v = v.replace(/\bGeneration Global\b/g, "Horde of Tannin");
    v = v.replace(/\bgeneration global\b/g, "horde of Tannin");

    // Generation Next
    v = v.replace(/\bGeneration Next\b/g, "Time of Nidhogg");
    v = v.replace(/\bgeneration next\b/g, "time of Nidhogg");

    // Net Generation
    v = v.replace(/\bNet Generation\b/g, "Damballa's Coils");
    v = v.replace(/\bnet generation\b/g, "Damballa's coils");
    v = v.replace(/\bGeneration Net\b/g, "Coils of Damballa");
    v = v.replace(/\bgeneration net\b/g, "Coils of Damballa");

    // Echo Boomers
    v = v.replace(/\bEcho Boomers\b/g, "Crotalids");
    v = v.replace(/\becho Boomers\b/g, "crotalids");

    // Parennials
    v = v.replace(/\bParennial\b/g, "Clutchmaster");
    v = v.replace(/\bParennial\b/g, "clutchmaster");

    // New Boomers
    v = v.replace(/\bNew Boomer(?:(s)\b(')|s\b)/g, "Jörmungandr's Circle$2$1");
    v = v.replace(/\bnew Boomer(?:(s)\b(')|s\b)/g, "Jörmungandr's circle$2$1");

    // Generation Flux
    v = v.replace(/\b(?:Generation Flux)|(?:Flux Generation)\b/g, "Hiss Club");
    v = v.replace(/\b(?:generation flux)|(?:flux generation)\b/g, "hiss club");

    // Generation Sell
    v = v.replace(/\bGeneration Sell\b/g, "Kaa Tribe");
    v = v.replace(/\bgeneration sell\b/g, "Kaa tribe");
    v = v.replace(/\bSell Generation\b/g, "Tribe of Kaa");
    v = v.replace(/\bsell generation\b/g, "tribe of Kaa");

    // Boomerang Generation
    v = v.replace(
        /\b(?:Boomerang Generation)|(?:Generation Boomerang)\b/g,
        "Ouroboros Society"
    );
    v = v.replace(
        /\b(?:boomerang generation)|(?:generation boomerang)\b/g,
        "ouroboros society"
    );

    // Peter Pan Generation
    v = v.replace(/\bPeter Pan Generation\b/g, "Neheb-Kau Cult");
    v = v.replace(/\b(?:P|p)eter (?:P|p)an generation\b/g, "Neheb-Kau cult");
    v = v.replace(/\bGeneration Peter Pan\b/g, "Cult of Neheb-Kau");
    v = v.replace(/\bgeneration (?:P|p)eter (?:P|p)an\b/g, "cult of Neheb-Kau");

    // Generation 911
    v = v.replace(/\bGen(?:eration)? 9\/?11\b/g, "Kaa Tribe");
    v = v.replace(/\bgen(?:eration)? 9\/?11\b/g, "Kaa tribe");
    v = v.replace(/\b9\/?11 Generation\b/g, "Tribe of the Kaa");
    v = v.replace(/\b9\/?11 generation\b/g, "tribe of the Kaa");

    // Cohorts
    v = v.replace(/\b(S|s)truggling (A|a)spirationals\b/g, "Struggling (with) Pythons");
    v = v.replace(/\b(S|s)uccessful (H|h)omeowners\b/g, "Viper Stripers");
    v = v.replace(/\b(A|a)ctive (A|a)ffluents\b/g, "Activated Boas");
    v = v.replace(/\b(C|c)omfortable (?:tv|Tv|TV) (W|w)atchers\b/g, "Cozy Cobras");

    // The Generation of €700
    v = v.replace(
        /\b(?:The Generation of €700)|(?:€700 Generation)\b/g,
        "Ophion"
    );
    v = v.replace(
        /\b(?:the generation of €700)|(?:€700 generation)\b/g,
        "ophion"
    );

    // Mileurista
    v = v.replace(/\b(?:M|m)ill?eurista\b/g, "Nagual");

    // Precarious Generation
    v = v.replace(
        /\b(?:Precarious Generation)|(?:Generation Precarious)\b/g,
        "Gargouille"
    );
    v = v.replace(
        /\b(?:precarious generation)|(?:generation precarious)\b/g,
        "gargouille"
    );

    // Foodmood: https://twitter.com/drewtoothpaste/status/1062721114953187328
    v = v.replace(/\b(?:F|f)oodmood\b/g, "hunger");

    return v;
}

// Returns true if a node should *not* be altered in any way
function isForbiddenNode(node) {
    return node.isContentEditable || // DraftJS and many others
    (node.parentNode && node.parentNode.isContentEditable) || // Special case for Gmail
    (node.tagName && (node.tagName.toLowerCase() == "textarea" || // Some catch-alls
                     node.tagName.toLowerCase() == "input"));
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    let i;
    let node;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            node = mutation.addedNodes[i];
            if (isForbiddenNode(node)) {
                // Should never operate on user-editable content
                continue;
            } else if (node.nodeType === 3) {
                // Replace the text for text nodes
                handleText(node);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(node);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    const observers = {
      title: undefined,
      body: undefined,
    };
    const docTitle = doc.getElementsByTagName('title')[0]
    const observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    };

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    observers.body = new MutationObserver(observerCallback);
    observers.body.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        observers.title = new MutationObserver(observerCallback);
        observers.title.observe(docTitle, observerConfig);
    }
}
const observers = walkAndObserve(document);
