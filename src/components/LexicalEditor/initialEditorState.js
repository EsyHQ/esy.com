import { $createParagraphNode, $createTextNode, $getRoot } from "lexical"
import { $createListItemNode, $createListNode } from "@lexical/list"
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text"
import { $createLinkNode } from "@lexical/link"



export default function initialEditorText() {
  const root = $getRoot()

  const heading = $createHeadingNode("h1")
  heading.append($createTextNode("Welcome to Esy, your AI-powered digital journal"))
  root.append(heading)

  const quote = $createQuoteNode();
  quote.append($createTextNode("This is a quote node."));
  root.append(quote);
  const paragraph = $createParagraphNode();
  paragraph.append(
    $createTextNode("Here are some text formats: "),
    $createTextNode("code").toggleFormat("code"),
    $createTextNode(", "),
    $createTextNode("bold").toggleFormat("bold"),
    $createTextNode(", "),
    $createTextNode("italic").toggleFormat("italic"),
    $createTextNode(", and so on.")
  );
  root.append(paragraph);
}
