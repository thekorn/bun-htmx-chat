export default function () {
  return (
    <form
      hx-post="/initChat"
      hx-swap="outerHTML"
      class="flex gap-2 items-center">
      <label for="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        class="border border-black rounded-sm px-2"
        placeholder="username"
        autocomplete="off"
        required=""
      />
      <button
        _="on keyup from closest <form/> debounced at 150ms
            if (<[required]:invalid/>).length > 0
                add @disabled
                add .bg-blue-300
                remove .bg-blue-600
                then exit
            end
            remove @disabled
            add .bg-blue-600
            remove .bg-blue-300
            "
        disabled
        class="px-8 py-3 text-white bg-blue-300 rounded focus:outline-none"
        type="submit">
        Start!
      </button>
    </form>
  );
}
