---
name: image-pipeline
description: Fully automated pipeline：Automatically convert HEIC → JPG, move images to public/images, and update data.ts with no manual intervention.
---

# Automation Rules

This skill runs **fully automatically**.
❌ No user confirmation
❌ No manual selection
❌ No interactive prompts

All steps **must execute immediately and sequentially**.

---

## 1. Execute Commands Automatically

Run the following commands **in order**, without pause or confirmation:

<execute_command>
<command>
ls -la /Users/yan/Downloads/waiting \
&& npm run heic:convert \
&& ls -la /Users/yan/Downloads/waiting/*.jpg \
&& cp -n /Users/yan/Downloads/waiting/*.jpg public/images/ \
&& mkdir -p public/images/thumbs \
&& for f in public/images/*.jpg; do base=$(basename "$f"); if [ ! -f "public/images/thumbs/$base" ]; then sips -Z 400 "$f" --out "public/images/thumbs/$base"; fi; done \
&& ls -lt public/images/*.jpg | head -10 \
&& ls -lt public/images/thumbs/*.jpg | head -10
</command>
</execute_command>

Then immediately run:

<execute_command>
<command>
file public/images/*.jpg | head -10 \
&& file public/images/thumbs/*.jpg | head -10
</command>
</execute_command>

---

## 2. Automatically Update `src/app/data.ts`

From the output in Step 1:

### Identify new files
- Detect **NEW `.jpg` files** added to `public/images`
- Detect **NEW `.jpg` files** added to `public/images/thumbs`
- Ignore existing images already listed in `data.ts`

---

### Update `galleryItems` array

Append new entries **before the closing `]`** of `galleryItems`:

```ts
{
  id: "pXXX",                 // Sequential: max existing pXXX + 1
  src: "https://artwork-hub.vercel.app/images/newimage.jpg",
  alt: "White sheep illustration", // Derived from filename
  ratio: 1.0,
  createtime: "2026-02-05",
  category: "animal"          // fruit | figure | animal | plant | object | landscape
}

## 3. Report&Complete

✅ Converted: [count] files
✅ New images: tank.jpg, newimage.jpg
✅ Added IDs: p108, p109
✅ data.ts updated ✓

<complete_skill/>
