# familien-dashboard (mein-ms.de) WFS importer

## Building

    docker build -t quay.io/codeformuenster/mein-ms-wfs-importer .

## Running

To run the importer, you need to know two things. The URL of the source WFS and the target elasticsearch URL. After you found these two URLs, run:

    docker run --rm quay.io/codeformuenster/mein-ms-wfs-importer --elasticsearch-url https://your-elasticsearch-instance --wfs-source-url https://your-wfs-source-url

