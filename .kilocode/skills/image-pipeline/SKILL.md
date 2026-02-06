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
&& ls -lt public/images/*.jpg | head -10
</command>
</execute_command>

Then immediately run:

<execute_command>
<command>
file public/images/*.jpg | head -10
</command>
</execute_command>

---

## 2. Automatically Update `src/app/data.ts`

From the output in Step 1:

### Identify new files
- Detect **NEW `.jpg` files** added to `public/images`
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
