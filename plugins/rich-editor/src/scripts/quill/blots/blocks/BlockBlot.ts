/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license https://opensource.org/licenses/GPL-2.0 GPL-2.0
 */

import Block from "quill/blots/block";

export default class BlockBlot extends Block {
    public static allowedChildren = [...Block.allowedChildren];
}
