import { h } from 'vue';
import { QBtn } from 'quasar';

export default class NameBobAssetActionProvider {
  static onLoad(handle, assetLink) {

    handle.defineSlot('com.example.farmos_asset_link.actions.v0.name_asset_bob', slot => {
      slot.type('asset-action');

      const doActionWorkflow = async (asset) => {

        await assetLink.entitySource.update((t) => {
          return t.updateRecord({
            type: asset.type,
            id: asset.id,
            attributes: {
              name: 'Bob',
            },
          });
        }, {label: `Rename asset: "${asset.attributes.name}" to "Bob"`});

      };

      slot.component(({ asset }) =>
        h(QBtn, { block: true, color: 'secondary', onClick: () => doActionWorkflow(asset), 'no-caps': true },  "Rename to 'Bob'" ));

    });

  }
}
