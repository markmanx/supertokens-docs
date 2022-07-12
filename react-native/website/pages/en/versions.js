/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary");

const Container = CompLibrary.Container;

const versions = {
  "v2": [
    "1.2.X"
  ],
  "v1": [
    "1.1.X",
    "1.0.X"
  ]
};

function Versions (props) {
  const { config: siteConfig } = props;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <table className="versions">
            {/* comment about why this is added */}
            <tbody id="sdk-autogenerated-docs-version-list"></tbody>
            <tbody>
              {[...versions.v2, ...versions.v1].map(
                version => (
                  <tr>
                    <th>{version}</th>
                    <td>
                      <a
                        href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${props.language ? props.language + "/" : ""
                          }${version}/installation`}>
                        Documentation
                      </a>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
