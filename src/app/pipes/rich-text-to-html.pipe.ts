import { Pipe, PipeTransform } from '@angular/core';

@Pipe({standalone: true, name: 'richTextToHtml'})
export class RichTextToHtmlPipe implements PipeTransform {
  transform(blocks: any[]): string {
    if (!blocks) {
      return '';
    }

    return blocks.map(block => {
      switch (block._type) {
        case 'block':
          switch (block.style) {
            case 'h1':
              return `<h1>${this.getText(block)}</h1>`;
            case 'h2':
              return `<h2>${this.getText(block)}</h2>`;
            case 'h3':
              return `<h3>${this.getText(block)}</h3>`;
            case 'h4':
              return `<h4>${this.getText(block)}</h4>`;
            case 'h5':
              return `<h5>${this.getText(block)}</h5>`;
            case 'h6':
              return `<h6>${this.getText(block)}</h6>`;
            case 'normal':
              return `<p>${this.getText(block)}</p>`;
            case 'blockquote':
              return `<blockquote>${this.getText(block)}</blockquote>`;
            case 'bullet':
              return `<ul><li>${this.getText(block)}</li></ul>`;
            case 'number':
              return `<ol><li>${this.getText(block)}</li></ol>`;
            default:
              return `<p>${this.getText(block)}</p>`;
          }
        default:
          return '';
      }
    }).join('');
  }

  private getText(block: any): string {
    return block.children.map((child: any) => {
      if (child.marks && child.marks.includes('strong')) {
        return `<strong>${child.text}</strong>`;
      } else if (child.marks && child.marks.includes('em')) {
        return `<em>${child.text}</em>`;
      } else if (child.marks && child.marks.includes('strike')) {
        return `<strike>${child.text}</strike>`;
      } else {
        return child.text;
      }
    }).join('');
  }
}
