import * as React from "react";

const Viewer = ({imageId}) => {
  // Create a ref for the viewer.
  const viewerRef = React.useRef(null);

  // When the component mounts, check if window and document are available. If they aren't,
  // then we can't render the viewer.
  // If they are available, the OpenSeaDragon viewer will be lazy loaded, and instantiated.
  React.useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      import("openseadragon").then((OpenSeaDragon) => {
        // Set the tile sources.
        //Getting the id ready to feed to viewer
        console.log(imageId)
        const baseURl =
          "https://digitalcollections.tricolib.brynmawr.edu/iiif/2/";
        const postFix = "~JP2~/info.json";
        let idWithColon = imageId.slice(0, 2) + ":" + imageId.slice(2);
        let url = baseURl + idWithColon + postFix;

        const tileSources = [encodeURI(url)];
        // Create the viewer.
        const viewer = new OpenSeaDragon.default({
          element: viewerRef.current,
          sequenceMode: true,
          tileSources: tileSources,
          showNavigator: true,
          prefixUrl:
            "https://github.swarthmore.edu/pages/DS/gatsby-openseadragon/",
        });
      });
    }
  }, []);

  return (
    <div
      id="openseadragon"
      ref={viewerRef}
      style={{ height: 600, width: "100%" }}
    />
  );
};

export default Viewer;
