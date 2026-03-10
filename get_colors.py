import sys
try:
    from PIL import Image
    import collections
    
    img = Image.open('assets/images/profile.jpg')
    img = img.convert('RGB')
    img.thumbnail((100, 100))
    colors = img.getcolors(10000)
    colors.sort(reverse=True)
    print("Top colors:")
    for count, color in colors[:10]:
        print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x} (Count: {count})")
except ImportError:
    print("Pillow not installed")
