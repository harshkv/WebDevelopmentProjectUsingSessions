var Item = require('../models/model');

module.exports.getItems = function () {

    let items = [];
    for (let i = 0; i < data.length; i++) {
        let item = new Item(
          data[i].itemCode,
            data[i].itemName,
            data[i].catalogCategory,
            data[i].description,
            data[i].temperature,
            data[i].fertilized,
            data[i].training,
            data[i].rating,
            data[i].imgUrl);
        items.push(item);

    }
    return items;
};

module.exports.getCategories = function () {
  return category;
};


/**
 * @param itemCode
 * @returns {*}
 */
module.exports.getItem = function (itemCode) {
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i].itemCode) == itemCode) {
            let item = new Item(
                data[i].itemCode,
                data[i].itemName,
                data[i].catalogCategory,
                data[i].description,
                data[i].temperature,
                data[i].watering,
                data[i].fertilized,
                data[i].training,
                data[i].rating,
                data[i].imgUrl
                )
            return item;
        }
    }
};

module.exports.checkItem = function (itemCode) {
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i].itemCode) == itemCode) {
            return true;
        }
    }
    return false;
};







// data hardcoded
var data = [
    {
        itemCode: 1,
        itemName: "Dwarf Jade (Portulacaria afra)",
        catalogCategory: "Indoor Bonsai",
        description: "The Dwarf Jade is a superb succulent native to South Africa and a favorite among elephants when dinner time rolls around.The Jade has been nicknamed 'The Elephant Plant' due to its symbiotic relationship with the world’s largest land mammal. As the elephants strip the leaves and cause general destruction during feeding frenzies, the fallen broken branches of the Jade propagate and within a few weeks the fleshy emerald leaves have grown back for more.Dwarf Jades are also fast growing and require little more than the occasional watering and lots of bright sunlight. Its fleshy branches, trunk and leaves help the tree store water for long periods of time, making this a perfect addition to any home or office.",
        temperature: "In the winter it can tolerate 50-61 degrees but will be fine between 61 and 71 degrees. Freezing temperatures will destroy this succulent plant. It will do well indoors throughout the year, but will be happiest if it gets to enjoy the outdoors during the summer.",
        watering:"The Dwarf Jade needs to be watered only after the soil is quite dry as it needs very little water. In the winter, if it is placed in a cool location, it will only need water every four to eight weeks. This plant can go without water for upward of four weeks without suffering at all making this easy to care for plant a gem for busy people.",
        fertilized: "Do not fertilize during the winter months as it only likes to be fertilized in the spring and summer every four weeks with a liquid bonsai fertilizer.",
        training: "Shaping is easy with this plant, again making it ideal for beginners. Established branches can be pruned from early spring to summer, and new shoots can be pruned anytime. Near the end of the summer, cut back 1 or 2 pairs of leaves after 4 or 5 leaf pairs have developed. Remove shoots that grow directly on the trunk, or branches that develop inside the crown. Because the bark is sensitive, branches can break easily so if you do choose to wire this plant, be sure to proceed gently and carefully during mid or late summer. You can encourage the direction of plant growth by manipulating the location of light as it will reach out for light.",
        rating: 3,
        imgUrl: "/Images/dwarf1.jpg",

    },
    {
      itemCode: 2,
      itemName: "Money Tree Grove",
      catalogCategory: "Indoor Bonsai",
      description: "Native to Central and South America, Money Trees are an excellent plant for both indoor and outdoor growth.  This plant can range from a few inches in height to over seven feet tall.  It originated in Japan and consists of several trunks wound together with green leaves sprouting from the top.  A story associated with the money tree is about a man whose prayers for money were answered because of this unique plant.  When he took the plant to his home, the man discovered he could grow several more from the seeds and became rich from selling the plants.  It is from this story that the plant was given its nickname: the 'money tree'.Braided Money Trees are usually given as a gift; they are reputed to bring good luck and prosperity.  Generally, the more leaves the Money Tree has, the better!  While it is common to find money trees with five to six leaves on each stem, it is quite rare to find one with seven leaves. Like a four-leaf clover, a Money Tree with a seven-leaf stem is considered to bring incredibly good fortune to its owner.",
      temperature:"Place in an area of moderate sunlight.  These plants can survive with varying degrees of sunlight, but do best with a few hours of sunlight and a few hours of shade.  If your plant experiences too much full sunlight, the leaves may begin to burn.  If weather permits, your Money Tree will enjoy being placed in a sunny to partial-shade exposure outdoors daily.  In very warm climates or during the heat of summer, light shade is a better option to prevent leaf burn.  Avoid direct sunlight for prolonged periods of time as this will cause the leaves to burn and turn slightly yellow.  For indoor plants, provide bright indirect light and turn the plant regularly toward the light source to keep it growing straight and leafing evenly.  In darker areas, leaves grow smaller but Money Trees can survive for a long time in very poor light.",
      watering:"With any bonsai plant, watering is crucial.  Most bonsai like to have plenty of water, but proper water drainage is key.  This is maintained by two very important factors: soil and the pot.The soil should contain a mixture of earth and small gravel pebbles which lie in the pot with one or more drain holes.  These holes need to be covered with mesh, to allow the water to flow freely but retain the soil.  You can also add some river rock to the mixture, to create porous areas in the soil which aid in draining. Some bonsai even grow well in a mix of peat, vermiculite and perlite. Our Bonsai All Purpose Blend provides the perfect amount of airiness and nutrition for your Money Tree.",
      fertilized: "It is unnecessary to give the tree fertilizer often, specifically in the bonsai plant size and style. Fertilizing once in the Spring and once in the Fall with Time Released Bonsai Fertilizer is sufficient. Try our organic Seaweed Fertilizer for fantastic results.  Trimming the dead leaves and providing plenty of fresh air, will allow your Braided Money Tree to live for many years.",
      training: "Prune the leaves to encourage growth. If you want new leaves to sprout, or have a wilting plant, prune off the browning leaves. Leaves can be trimmed at any time of the year, and you will notice that they grow back quickly.  This Bonsai is usually presented in a braided or knotted form which is achieved when the stalks are young and supple. The money tree can be pruned by cutting off the stem, and new growth will appear at the cut over time. With careful maintenance, you can direct the growth of your plant in a style that is most pleasing to you.  See our Tinyroots Bonsai Shears for precision and the ultimate in lifetime bonsai tools.",
      rating: 2,
      imgUrl: "/Images/money_tree.jpg",


    },
    {
    itemCode:3,
    itemName: "Chinese elm (Ulmus Parviflora)",
    catalogCategory: "Indoor Bonsai",
    description: "Native to East Asia the Chinese Elm is one of the most popular bonsai trees, especially among beginners. These lovely semi-evergreen trees can grow up to 65 feet tall in their native habitat, but have been cultivated in miniature form for Bonsai for generations. It is an ideal choice for those just starting out because it is slow-growing and tolerant, the Chinese Elm allows beginners plenty of time and forgiveness to grow accustomed to bonsai care making it one of the most loved and most undemanding of miniature trees.",
    temperature:"Though generally tolerant, the Chinese Elm does not like drafts or a lot of variation in temperature. Most indoor tropical bonsai trees prefer temperatures between 60 and 70 degrees Fahrenheit. In the summer, Chinese Elm trees can be kept outdoors. However, you must remember to bring your bonsai tree indoors when the temperature drops below 60 degrees.",
    watering:"Chinese Elms prefer their soil to be slightly moist and allowed to dry out a little between watering sessions making it a practical choice for the frequent traveler. To get familiar with when to water the Chinese Elm Bonsai, stick your finger a half-inch it on the soil: If you do not feel much moisture, then it is likely time to water. Never let the soil become completely dry for long.During the winter months your Chinese Elm will require less water. In the spring and summer, it may need water every day or so, depending on location and climate. Watering cycles will vary, so avoid strict schedules. Get to know when your tree needs watering by observing its foliage, testing the soil with your index finger, or by weighing the pot in your hands. The drier the tree, the lighter it will feel.If you have a water mister, try misting your tree a couple times a week to help with humidity. Misting is beneficial to your tree’s health but it is not a replacement for watering. Make sure you elevate your pot on pebbles so that its roots do not sit in water, this will provide your plant with moisture, without contributing to root rot. Our Haws Watering Set, which consists of a watering can & professional mister, will help you deliver the perfect amount of water to your Chinese Elm.",
    fertilized: "Fertilize your Chinese Elm bonsai once every two weeks during the growing season (spring through fall) with a bonsai-specific or organic fertilizer. Water your tree well before fertilizing and try our Neptune's Seaweed (0-0-1) - an organic supplement which provides over 60 naturally occurring major and minor nutrients and amino acids.",
    training: "Pruning is necessary to maintain the right shape of your bonsai and also to encourage new growth. That means removing small branches, buds, and new shoots.. Chinese Elm trees are ideal for beginners because their branches can be pruned all year and doing well when new shoots are allowed to develop eight leaf pairs, and then trimmed back to two or three.  Check out our TinyRoots 4 Piece Tool Set which comes with a 101 Tips book.",
    rating: 3,
    imgUrl: "/Images/chinese-elm-bonsai-tree.jpg",
  },
  {
    itemCode:4,
    itemName: "Fringe Flower",
    catalogCategory: "Outdoor Bonsai",
    description: "Loropetalum chinensis is an evergreen shrub from China and the Himalayas of the broad leaf variety bearing fragrant flowers in the spring. Loropetalum has a spreading form and may attain a height of 12 ft in its native habitat with a width a bit more than half that.  Common names for Loropetalum chinensis are Chinese fringe flower and Chinese witch hazel.The common name, 'fringe-flower' and the Latin name, 'Loropetalum' derive from the appearance of Loropetalum flower, the petals (petalon, in Greek) of which resemble fringe or little straps (loron, in Greek).  Because Chinese Loropetalum is in the witch-hazel family those familiar with the flowers of witch-hazel tree will tend to notice the family resemblance.  Pest free and hardy, the Fringe flower is a perfect Bonsai for a beginner and will delight its owner with abundant flowers that are beautiful and unique.",
    temperature:"The versatility and heartiness of Loropetalum is that it can be grown outdoors in mild coastal climates in light shade to full sun, yet can tolerate the cooler winter temperatures and heat associated with other regions. A primary difference in the plants grown in these extremes is whether the plant remains evergreen or not.",
    watering:"The Fringe Flower has average water needs. Watering on a regular schedule without over watering will keep the plant moist and healthy.  Be sure to provide a humidity tray to ensure that the roots do not sit in water where they will develop root rot, while still offering the moisture that this plant craves.",
    fertilized:"The best time to fertilize is early spring, with an organic fish emulsion, but you'll likely discover that very little is required when it's grown in a compost-enriched soil.",
    training: "The Fringe flower bonsai tree is especially handsome pruned up from the bottom and shaped like a multi-trunk tree. You can prune it anytime, but it is ideal to do so just after the spring blooms fade. Wire gently into any desired form and ensure that the wires do not cut into the bark.  Remove wires gently with cutters rather than risking breaking the branches trying to unravel the wires. ",
    rating: 5,
    imgUrl: "/Images/fringe-flower-bonsai-tree.jpg",
  },
  {
    itemCode:5,
    itemName: "Camellia Hot Flash Care",
    catalogCategory: "Outdoor Bonsai",
    description: "The Camellia is native to the mountains of Korea and Japan growing to heights of up to 39 feet.  It is also found in Mediterranean countries where it only reaches heights of up to 26 feet. Camellia bonsai are within a family of species which include Camellia sasanqua, Camellia japonica, and Camellia reticulate. Though there are more than 250 species, the most popular choice is the Camellia sasanqua, which is particularly small and hardy. It works well as a bonsai because it has small flowers and leaves which are well suited to bonsai proportions.  The Camellia ‘Hot Flash’ will be a welcome addition to any bonsai gardener’s collection with lovely vibrant flowers and a lush canopy of green leaves.",
    temperature:"When growing Camellia bonsai, you need to keep the tree in a location that is airy and cool with much light but not direct sunlight.  This plant prefers being placed in a partially shady spot in mid spring after the danger of frost is over.  It will need to be brought indoors in early fall taking care to move the plant before it begins to develop flower buds or they will tend to fall off",
    watering:"This Bonsai does enjoy bright diffused light, but will not do well in direct sunlight.  It prefers diffused morning sun and afternoon shade.",
    fertilized:"The Camilla Bonsai will need to be fed about every two to three weeks during the growing season with a liquid bonsai fertilizer.  You will want to stop fertilizing once the winter months of blooming arrive.",
    training: "You can prune the Camellia during the winter once it has gone through its flowering. After that time, any spent flowers would need to be removed and the tree trimmed to the desired shape. To encourage branching, you will want to prune back the new shoots leaving only two or three leaves in place.  You’re your bonsai has reached its desired shape, you will need to prune only once when it is about to bloom as the first shoots appear.  Then, leave new shoots in place so that buds have enough time to develop.  You can try a number of styles on the Camellia as it is suited for any number of styles, however, the best choices include cascade for the larger trees and an informal upright on single or multiple trunk trees.",
    rating: 5,
    imgUrl: "/Images/camellia-bonsai-tree.jpg",
  },
  {
    itemCode:6,
    itemName: "Pomegranate Bonsai Tree",
    catalogCategory: "Outdoor Bonsai",
    description: "One of the most loved species of cultivated Bonsai, the Pomegranate has a rich historical and mythical lore. The leaves are opposite or sub-opposite, glossy, and narrow oblong. The Pomegranate flowers are bright red. The Socotran Pomegranate has pink (not red) flowers. Pomegranates are drought tolerant. If too wet, root decay results from fungal infestation. The Pomegranate is tolerant of moderate frost, down to about 14º F. The name Punica is from the Phoenicians who were active in broadening its cultivation, partly for religious reasons.",
    temperature:"Pomegranate trees like full sun in the summer, less in winter, but still full light as an indoor plant. Leaves can withstand temperatures down to 14º F but the roots dislike freezing temperatures. Grenadine syrup is thickened and sweetened Pomegranate juice used in cocktail mixing. The ancient city of Granada in Spain was renamed after the Pomegranate during the Moorish period.",
    watering:"Bonsai trees live in small pots and their world dries out much quicker than plants in the ground or in bigger pots, so close attention should be paid to watering. Striking a balance between not enough water and too much water can be a bit tricky but is very important. Water thoroughly, keeping it damp but not wet. Reduce watering in the winter. An old bonsai watering trick is to place the entire pot in a sink of water an inch or two deep and let the water absorb from the holes in the bottom of the pot. The Pomegranate tree may benefit from weekly misting.An inexpensive moisture meter takes the guesswork out of watering. We sell them on our web-site. Water slowly so it absorbs into the dirt, otherwise the water will run all over your table. We pot our bonsai trees specifically to drain well, so it’s almost impossible to over water.",
    fertilized:"Fertilizing a bonsai is essential to its health because the nutrients in the soil leave very quickly with the water. When new growth appears in the spring, it’s time to start feeding your bonsai. Use a liquid bonsai fertilizer or half-strength general purpose plant food every two weeks from spring to autumn. Do not fertilize for three months after repotting. The Pomegranate tree can benefit from an addition of pulverized organic fertilizer in mid-spring.",
    training: "To develop the foliage, pinch out the tender new, usually green, shoots using your fingers cutting to first or third couple of leaves. If you want new shoots, allow them to mature to a branch length longer than you eventually want it to be and then shorten it later. There may be some natural die-back which may affect the design of the tree.",
    rating: 5,
    imgUrl: "/Images/pomegranate-bonsai-tree.png",
  }

];
var category = ["Indoor Bonsai", "Outdoor Bonsai"];
